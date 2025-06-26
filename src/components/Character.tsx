import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useGameStore } from "../store/gameStore";

interface CharacterProps {
  position: [number, number, number];
}

export const Character: React.FC<CharacterProps> = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const { openCharacterDialog } = useGameStore();

  // Load shiba model
  const { scene } = useGLTF("/models/shiba/scene.gltf");
  const shibaRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle bobbing animation
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime()) * 0.05;
    }

    if (shibaRef.current) {
      // Gentle rotation animation for the shiba
      shibaRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  const handleClick = () => {
    openCharacterDialog({
      text: "안녕하세요! 저는 이 캠핑장의 주인이에요. 무엇을 도와드릴까요?",
      options: [
        {
          text: "당신에 대해 알려주세요",
          action: () => {
            openCharacterDialog({
              text: "저는 웹 개발자이자 3D 아티스트입니다. 이 평화로운 공간에서 창작 활동을 하며 지내고 있어요. 통나무에 앉아서 불을 바라보며 명상하는 걸 좋아합니다.",
              options: [
                {
                  text: "멋지네요!",
                  action: () => {
                    openCharacterDialog({
                      text: "감사합니다! 이 곳에서 편안히 쉬어가세요. 통나무에 앉아서 불소리와 음악을 들으며 휴식을 취해보세요.",
                      options: [],
                    });
                  },
                },
              ],
            });
          },
        },
        {
          text: "이 곳에 대해 알려주세요",
          action: () => {
            openCharacterDialog({
              text: "이곳은 저만의 특별한 캠핑장이에요. 통나무에 앉아서 불을 바라보며 lofi 음악을 들을 수 있고, 포트폴리오 게시판도 있어요. 공부하거나 휴식을 취하기 좋은 곳입니다.",
              options: [],
            });
          },
        },
      ],
    });
  };

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Shiba model */}
      <primitive
        ref={shibaRef}
        object={scene.clone()}
        position={[0, 0.5, 0]}
        scale={[0.8, 0.8, 0.8]}
        castShadow
        receiveShadow
      />

      {/* Hover indicator */}
      {hovered && (
        <mesh position={[0, 1.5, 0]}>
          <ringGeometry args={[0.4, 0.5, 16]} />
          <meshBasicMaterial color="#ff8c42" transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  );
};

// Preload the GLTF model
useGLTF.preload("/models/shiba/scene.gltf");
