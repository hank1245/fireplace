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

  return (
    <group position={position} rotation={rotation}>
      {/* 회전을 위한 추가 group */}
      <group ref={modelRef}>
        {/* Bench model */}
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
