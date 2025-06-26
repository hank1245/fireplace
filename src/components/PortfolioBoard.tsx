import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";

interface PortfolioBoardProps {
  position: [number, number, number];
}

export const PortfolioBoard: React.FC<PortfolioBoardProps> = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const { togglePortfolio } = useGameStore();

  return (
    <group position={position}>
      {/* Board post */}
      <mesh position={[0, 1, -0.1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Board base */}
      <mesh position={[0, 0.1, -0.1]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>

      {/* Main board */}
      <mesh
        position={[0, 1.5, 0]}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={togglePortfolio}
        scale={hovered ? 1.05 : 1}
      >
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial
          color={hovered ? "#A0522D" : "#654321"}
          roughness={0.7}
        />
      </mesh>

      {/* Board frame */}
      <mesh position={[0, 1.5, 0.05]}>
        <boxGeometry args={[1.6, 2.1, 0.05]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>

      {/* "Portfolio" text simulation with small boxes */}
      <mesh position={[0, 2.2, 0.06]}>
        <boxGeometry args={[1.2, 0.3, 0.02]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Project items simulation */}
      <mesh position={[-0.4, 1.7, 0.06]}>
        <boxGeometry args={[0.6, 0.15, 0.02]} />
        <meshBasicMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0.4, 1.7, 0.06]}>
        <boxGeometry args={[0.6, 0.15, 0.02]} />
        <meshBasicMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[-0.4, 1.4, 0.06]}>
        <boxGeometry args={[0.6, 0.15, 0.02]} />
        <meshBasicMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0.4, 1.4, 0.06]}>
        <boxGeometry args={[0.6, 0.15, 0.02]} />
        <meshBasicMaterial color="#e8e8e8" />
      </mesh>
    </group>
  );
};
