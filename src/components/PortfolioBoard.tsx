import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface PortfolioBoardProps {
  position: [number, number, number];
}

export const PortfolioBoard: React.FC<PortfolioBoardProps> = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const { togglePortfolio } = useGameStore();
  const paperTexture = useLoader(THREE.TextureLoader, "/textures/paper.jpg");

  return (
    <group position={position} rotation={[0, -Math.PI / 1.25, 0]}>
      {/* Board post */}
      <mesh position={[0, 1, -0.1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Board base */}
      <mesh position={[0, 0.1, -0.1]} castShadow>
        <boxGeometry args={[0.7, 0.2, 0.5]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>

      {/* Main board */}
      <mesh
        position={[0, 1.5, 0]}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={togglePortfolio}
        scale={1}
      >
        <boxGeometry args={[1.5, 1.7, 0.1]} />
        <meshStandardMaterial
          color={hovered ? "#A0522D" : "#654321"}
          roughness={0.7}
        />
      </mesh>

      {/* Board frame */}
      <mesh position={[0, 1.5, 0.05]}>
        <boxGeometry args={[1.6, 1.7, 0.05]} />
        <meshStandardMaterial color={hovered ? "#A0522D" : "#654321"} />
      </mesh>

      {/* "Portfolio" text */}
      <Text
        position={[0, 2.12, 0.11]}
        fontSize={0.2}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        PORTFOLIO
      </Text>

      {/* Project items */}
      <mesh position={[-0.35, 1.7, 0.1]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshBasicMaterial map={paperTexture} />
      </mesh>
      <mesh position={[0.35, 1.7, 0.1]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshBasicMaterial map={paperTexture} />
      </mesh>
      <mesh position={[-0.35, 1.2, 0.1]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshBasicMaterial map={paperTexture} />
      </mesh>
      <mesh position={[0.35, 1.2, 0.1]}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
        <meshBasicMaterial map={paperTexture} />
      </mesh>
    </group>
  );
};
