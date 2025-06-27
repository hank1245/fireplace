import React, { useState, useRef } from "react";
import { useGameStore } from "../store/gameStore";
import * as THREE from "three";
import { Bench } from "./models/Bench";

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
  const modelRef = useRef<THREE.Group>(null);

  const handleClick = () => {
    if (isOccupied) {
      setSeat(null);
    } else {
      setSeat(seatId);
    }
  };

  // 중심 보정값 (Bench 모델의 중심 좌표에 맞게 수정)
  const centerOffset: [number, number, number] = [3.491, 1.74, 0.04];

  return (
    <group
      position={[
        position[0] - centerOffset[0],
        position[1] - centerOffset[1],
        position[2] - centerOffset[2],
      ]}
      rotation={rotation}
    >
      <group position={centerOffset} ref={modelRef}>
        <Bench
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={handleClick}
          scale={1}
        />
      </group>
    </group>
  );
};
