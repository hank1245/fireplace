import React, { useEffect, useRef, useCallback } from "react";
import { useGameStore } from "../store/gameStore";

export const AudioSystem: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const fireAudioRef = useRef<OscillatorNode | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);
  const fireSoundRef = useRef<HTMLAudioElement | null>(null);
  const { setLofiMusicPlaying } = useGameStore();

  const playFireSound = useCallback(() => {
    try {
      const fireAudio = new Audio("/sounds/fire.mp3");
      fireAudio.loop = true;
      fireAudio.volume = 0.4; // Set volume to 40% for ambient fire sound

      // Handle user interaction requirement for autoplay
      const playPromise = fireAudio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Fire sound started playing");
            fireSoundRef.current = fireAudio;
          })
          .catch((error) => {
            console.log("Auto-play was prevented for fire sound:", error);
            // Fallback to user-initiated play
            const handleFirstUserInteraction = () => {
              fireAudio.play().then(() => {
                console.log("Fire sound started after user interaction");
                fireSoundRef.current = fireAudio;
              });
              document.removeEventListener("click", handleFirstUserInteraction);
              document.removeEventListener("keydown", handleFirstUserInteraction);
            };

            document.addEventListener("click", handleFirstUserInteraction);
            document.addEventListener("keydown", handleFirstUserInteraction);
          });
      }
    } catch (error) {
      console.error("Error loading fire sound file:", error);
    }
  }, []);

  const stopFireSound = useCallback(() => {
    if (fireSoundRef.current) {
      fireSoundRef.current.pause();
      fireSoundRef.current.currentTime = 0;
      console.log("Fire sound stopped");
    }
  }, []);

  const stopLofiMusic = useCallback(() => {
    console.log("stopLofiMusic called, musicAudioRef.current:", musicAudioRef.current);
    if (musicAudioRef.current) {
      musicAudioRef.current.pause();
      musicAudioRef.current.currentTime = 0;
      musicAudioRef.current = null;
      setLofiMusicPlaying(false);
      console.log("Lofi music stopped");
      
      // Restart fire sound when lofi music stops
      playFireSound();
    } else {
      console.log("No music to stop");
    }
  }, [playFireSound, setLofiMusicPlaying]);

  const playLofiMusic = useCallback(() => {
    // Stop current music if playing
    if (musicAudioRef.current) {
      musicAudioRef.current.pause();
      musicAudioRef.current.currentTime = 0;
    }

    // Stop fire sound when lofi music starts
    stopFireSound();

    // Load and play actual music file from public/sounds folder
    try {
      const audio = new Audio("/sounds/lofimusic.wav");
      audio.loop = true;
      audio.volume = 0.3; // Set volume to 30% for ambient background

      // Handle user interaction requirement for autoplay
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Music started playing");
            musicAudioRef.current = audio;
            setLofiMusicPlaying(true);
          })
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
            // Fallback to user-initiated play
            const handleFirstUserInteraction = () => {
              audio.play().then(() => {
                console.log("Music started after user interaction");
                musicAudioRef.current = audio;
                setLofiMusicPlaying(true);
              });
              document.removeEventListener("click", handleFirstUserInteraction);
              document.removeEventListener("keydown", handleFirstUserInteraction);
            };

            document.addEventListener("click", handleFirstUserInteraction);
            document.addEventListener("keydown", handleFirstUserInteraction);
          });
      }
    } catch (error) {
      console.error("Error loading music file:", error);
    }
  }, [stopFireSound, setLofiMusicPlaying]);

  useEffect(() => {
    // Initialize audio context
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();

        // Start playing fire.mp3 automatically
        playFireSound();
      } catch (error) {
        console.log("Audio context not supported");
      }
    };

    initAudio();
    
    console.log("Adding event listeners for playLofiMusic and stopLofiMusic");
    window.addEventListener('playLofiMusic', playLofiMusic);
    window.addEventListener('stopLofiMusic', stopLofiMusic);

    return () => {
      console.log("Removing event listeners");
      window.removeEventListener('playLofiMusic', playLofiMusic);
      window.removeEventListener('stopLofiMusic', stopLofiMusic);
      
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (musicAudioRef.current) {
        musicAudioRef.current.pause();
        musicAudioRef.current = null;
      }
      if (fireSoundRef.current) {
        fireSoundRef.current.pause();
        fireSoundRef.current = null;
      }
    };
  }, [playFireSound, playLofiMusic, stopLofiMusic]);

  const createFireSound = () => {
    if (!audioContextRef.current) return;

    const context = audioContextRef.current;

    // Create multiple oscillators for complex fire sound
    const createFireOscillator = (frequency: number, volume: number) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const filter = context.createBiquadFilter();

      oscillator.type = "sawtooth";
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
      filter.type = "highpass";
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
      createFireOscillator(200, 0.01),
    ];

    fireAudioRef.current = fireOscillators[0].oscillator;
  };


  return null; // This component doesn't render anything visible
};

// Add this component to your Scene component
export default AudioSystem;
