import React, { useEffect, useRef } from 'react';
import { useGameStore } from '../store/gameStore';

export const AudioSystem: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const fireAudioRef = useRef<OscillatorNode | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);
  const { isPlayingMusic, currentSeat } = useGameStore();

  useEffect(() => {
    // Initialize audio context
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Create fire crackling sound using Web Audio API
        if (audioContextRef.current) {
          createFireSound();
        }
      } catch (error) {
        console.log('Audio context not supported');
      }
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (musicAudioRef.current) {
        musicAudioRef.current.pause();
        musicAudioRef.current = null;
      }
    };
  }, []);

  const createFireSound = () => {
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;
    
    // Create multiple oscillators for complex fire sound
    const createFireOscillator = (frequency: number, volume: number) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const filter = context.createBiquadFilter();
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      
      // Add some randomness to frequency
      const lfo = context.createOscillator();
      const lfoGain = context.createGain();
      lfo.frequency.setValueAtTime(0.5, context.currentTime);
      lfoGain.gain.setValueAtTime(frequency * 0.1, context.currentTime);
      
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();
      
      // Filter for crackling effect
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(200, context.currentTime);
      
      // Volume envelope
      gainNode.gain.setValueAtTime(0, context.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, context.currentTime + 0.1);
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      
      return { oscillator, gainNode, lfo };
    };

    // Create fire sound layers
    const fireOscillators = [
      createFireOscillator(80, 0.02),
      createFireOscillator(120, 0.015),
      createFireOscillator(200, 0.01)
    ];

    fireAudioRef.current = fireOscillators[0].oscillator;
  };

  useEffect(() => {
    // Handle lofi music when sitting
    if (currentSeat && !isPlayingMusic) {
      playLofiMusic();
    } else if (!currentSeat && isPlayingMusic) {
      stopLofiMusic();
    }
  }, [currentSeat, isPlayingMusic]);

  const playLofiMusic = () => {
    // Since we can't load actual audio files without a server,
    // we'll create a simple ambient tone that sounds lofi-ish
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;
    
    // Create a simple lofi-style ambient sound
    const createLofiTone = (frequency: number, volume: number) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const filter = context.createBiquadFilter();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      
      // Low-pass filter for warm, muffled sound
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, context.currentTime);
      filter.Q.setValueAtTime(1, context.currentTime);
      
      gainNode.gain.setValueAtTime(volume, context.currentTime);
      
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(context.destination);
      
      oscillator.start();
      
      return oscillator;
    };

    // Create chord progression
    createLofiTone(220, 0.03); // A
    createLofiTone(261.63, 0.025); // C
    createLofiTone(329.63, 0.02); // E
  };

  const stopLofiMusic = () => {
    if (musicAudioRef.current) {
      musicAudioRef.current.pause();
      musicAudioRef.current.currentTime = 0;
    }
  };

  return null; // This component doesn't render anything visible
};

// Add this component to your Scene component
export default AudioSystem;