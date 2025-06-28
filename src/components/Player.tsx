import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import * as THREE from "three";
import { useGameStore } from "../store/gameStore";
import { KnightCharacter } from "./models/Knight_character";

export const Player: React.FC = () => {
  const playerRef = useRef<THREE.Group>(null);
  const knightRef = useRef<THREE.Group>(null);
  const { setPlayerPosition } = useGameStore();
  const [keys, setKeys] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  const playerPosition = useRef(new Vector3(0, 0.5, 8));
  const playerVelocity = useRef(new Vector3());
  const speed = 3;

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["w", "a", "s", "d"].includes(key)) {
        setKeys((prev) => ({ ...prev, [key]: true }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (["w", "a", "s", "d"].includes(key)) {
        setKeys((prev) => ({ ...prev, [key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((state, delta) => {
    if (!playerRef.current) return;

    // 입력에 따른 이동 벡터 계산
    const moveVector = new Vector3();

    if (keys.w) moveVector.z -= 1;
    if (keys.s) moveVector.z += 1;
    if (keys.a) moveVector.x -= 1;
    if (keys.d) moveVector.x += 1;

    // 이동 벡터 정규화 및 속도 적용
    if (moveVector.length() > 0) {
      moveVector.normalize();
      playerVelocity.current.copy(moveVector.multiplyScalar(speed * delta));

      // 플레이어 위치 업데이트
      playerPosition.current.add(playerVelocity.current);

      // 경계 제한 (40x40 plane 영역 내에서만 이동)
      playerPosition.current.x = Math.max(
        -19,
        Math.min(19, playerPosition.current.x)
      );
      playerPosition.current.z = Math.max(
        -19,
        Math.min(19, playerPosition.current.z)
      );

      // 플레이어 회전 (이동 방향으로)
      if (moveVector.length() > 0) {
        const angle = Math.atan2(moveVector.x, moveVector.z);
        playerRef.current.rotation.y = angle;

        // Knight 모델도 같은 방향으로 회전
        if (knightRef.current) {
          knightRef.current.rotation.y = angle;
        }
      }
    }

    // 플레이어 위치 적용
    playerRef.current.position.copy(playerPosition.current);

    // 게임 스토어에 플레이어 위치 업데이트
    setPlayerPosition(playerPosition.current.clone());
  });

  return (
    <group ref={playerRef} position={playerPosition.current}>
      {/* Knight 모델 */}
      <KnightCharacter
        ref={knightRef}
        position={[0, -0.6, 0]}
        scale={[1, 1, 1]}
        castShadow
        receiveShadow
      />
    </group>
  );
};
