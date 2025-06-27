import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import * as THREE from "three";

const FireParticle: React.FC<{ position: Vector3 }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position.y;
  const speed = Math.random() * 0.02 + 0.01;
  const waveSpeed = Math.random() * 0.1 + 0.05;
  const waveAmplitude = Math.random() * 0.3 + 0.1;

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = initialY + Math.sin(time * speed * 10) * 2;
      meshRef.current.position.x =
        position.x + Math.sin(time * waveSpeed) * waveAmplitude;
      meshRef.current.position.z =
        position.z + Math.cos(time * waveSpeed) * waveAmplitude;

      // Reset particle when it goes too high
      if (meshRef.current.position.y > initialY + 3) {
        meshRef.current.position.y = initialY;
      }

      // Flickering effect
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + Math.sin(time * 5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial
        color={new THREE.Color(1, 0.4, 0.1)}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

export const Fireplace: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const fireParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 1.5;
      const y = Math.random() * 0.5;
      const z = (Math.random() - 0.5) * 1.5;
      particles.push(new Vector3(x, y, z));
    }
    return particles;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Fire base logs */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Fire particles */}
      {fireParticles.map((pos, index) => (
        <FireParticle key={index} position={pos} />
      ))}

      {/* Core fire light */}
      <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color="#ff6b35"
        castShadow
      />

      {/* Ambient fire glow */}
      <pointLight
        position={[0, 0.5, 0]}
        intensity={1}
        distance={5}
        color="#ff8c42"
      />
    </group>
  );
};
