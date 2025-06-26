import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";

interface LogBenchProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

export const LogBench: React.FC<LogBenchProps> = ({
  position,
  rotation = [0, 0, 0],
}) => {
  const [hovered, setHovered] = useState(false);
  const { currentSeat, setSeat } = useGameStore();
  const seatId = `bench-${position.join("-")}`;
  const isOccupied = currentSeat === seatId;

  const handleClick = () => {
    if (isOccupied) {
      setSeat(null);
    } else {
      setSeat(seatId);
    }
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Main log - 가로로 누운 원통 형태 */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
        scale={hovered ? 1.05 : 1}
        rotation={[0, 0, Math.PI / 2]} // 가로로 눕힘
      >
        <cylinderGeometry args={[0.25, 0.3, 2]} />
        <meshStandardMaterial
          color={hovered ? "#A0522D" : "#8B4513"}
          roughness={0.8}
        />
      </mesh>

      {/* Sitting indicator */}
      {isOccupied && (
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#4fc3f7" transparent opacity={0.6} />
        </mesh>
      )}

      {/* Hover indicator */}
      {hovered && !isOccupied && (
        <mesh position={[0, 0.6, 0]}>
          <ringGeometry args={[0.3, 0.4, 16]} />
          <meshBasicMaterial color="#ff8c42" transparent opacity={0.4} />
        </mesh>
      )}
    </group>
  );
};
