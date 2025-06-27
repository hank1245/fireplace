import React, { useState, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGameStore } from "../store/gameStore";
import * as THREE from "three";

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

  // Load bench model
  const { scene } = useGLTF("/models/bench/scene.gltf");

  useEffect(() => {
    if (modelRef.current && scene) {
      // 모델의 바운딩 박스를 계산하여 중심점 조정
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());

      // 모델을 중심점으로 이동시켜 회전 중심을 맞춤
      scene.position.sub(center);
    }
  }, [scene]);

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
        <primitive
          object={scene.clone()}
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

// Preload the GLTF model
useGLTF.preload("/models/bench/scene.gltf");
