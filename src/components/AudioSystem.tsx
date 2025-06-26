import React, { useEffect, useRef } from "react";

export const AudioSystem: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const fireAudioRef = useRef<OscillatorNode | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio context
    const initAudio = async () => {
      try {
        audioContextRef.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();

        // Create fire crackling sound using Web Audio API
        if (audioContextRef.current) {
          createFireSound();
        }

        // Start playing music immediately
        playLofiMusic();
      } catch (error) {
        console.log("Audio context not supported");
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

  // 통나무에 앉을 때 음악 제어는 제거 (항상 재생)

  const playLofiMusic = () => {
    // Load and play actual music file from public/music folder
    try {
      const audio = new Audio("/music/Best of lofi 2.wav");
      audio.loop = true;
      audio.volume = 0.3; // Set volume to 30% for ambient background

      // Handle user interaction requirement for autoplay
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Music started playing");
            musicAudioRef.current = audio;
          })
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
            // Fallback to user-initiated play
            const handleFirstUserInteraction = () => {
              audio.play().then(() => {
                console.log("Music started after user interaction");
                musicAudioRef.current = audio;
              });
              document.removeEventListener("click", handleFirstUserInteraction);
              document.removeEventListener(
                "keydown",
                handleFirstUserInteraction
              );
            };

            document.addEventListener("click", handleFirstUserInteraction);
            document.addEventListener("keydown", handleFirstUserInteraction);
          });
      }
    } catch (error) {
      console.error("Error loading music file:", error);
    }
  };

  return null; // This component doesn't render anything visible
};

// Add this component to your Scene component
export default AudioSystem;
