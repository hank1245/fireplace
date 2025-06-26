import React, { useMemo } from "react";
import { Vector3 } from "three";

const Tree: React.FC<{ position: Vector3; scale?: number }> = ({
  position,
  scale = 1,
}) => {
  return (
    <group position={position} scale={scale}>
      {/* Tree trunk */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 3]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>

      {/* Tree crown - multiple layers for fullness */}
      <mesh position={[0, 3.5, 0]} castShadow>
        <coneGeometry args={[2, 3, 8]} />
        <meshStandardMaterial color="#1a4d3a" />
      </mesh>
      <mesh position={[0, 2.8, 0]} castShadow>
        <coneGeometry args={[1.8, 2.5, 8]} />
        <meshStandardMaterial color="#2d5a47" />
      </mesh>
      <mesh position={[0, 2, 0]} castShadow>
        <coneGeometry args={[1.6, 2, 8]} />
        <meshStandardMaterial color="#3a6b54" />
      </mesh>
    </group>
  );
};

const Bush: React.FC<{ position: Vector3; scale?: number }> = ({
  position,
  scale = 1,
}) => {
  return (
    <mesh position={position} scale={scale} castShadow>
      <sphereGeometry args={[0.8, 8, 6]} />
      <meshStandardMaterial color="#2d4a3a" />
    </mesh>
  );
};

export const Forest: React.FC = () => {
  const trees = useMemo(() => {
    const treePositions = [];
    const numTrees = 20; // 나무 수 증가

    for (let i = 0; i < numTrees; i++) {
      const angle = (i / numTrees) * Math.PI * 2;
      const radius = 12 + Math.random() * 6; // 더 넓은 범위에 배치
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.8 + Math.random() * 0.4;

      treePositions.push({
        position: new Vector3(x, 0, z),
        scale,
      });
    }

    return treePositions;
  }, []);

  const bushes = useMemo(() => {
    const bushPositions = [];
    const numBushes = 25; // 관목 수 증가

    for (let i = 0; i < numBushes; i++) {
      const angle = (i / numBushes) * Math.PI * 2 + 0.3;
      const radius = 8 + Math.random() * 8; // 더 넓은 범위에 배치
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.6 + Math.random() * 0.5;

      bushPositions.push({
        position: new Vector3(x, 0.4, z),
        scale,
      });
    }

    // 추가로 랜덤한 위치에 관목들 배치
    for (let i = 0; i < 15; i++) {
      const x = (Math.random() - 0.5) * 30; // -15 ~ 15 범위
      const z = (Math.random() - 0.5) * 30; // -15 ~ 15 범위
      const scale = 0.4 + Math.random() * 0.6;

      // 중앙 모닥불 주변은 피하기
      if (Math.sqrt(x * x + z * z) > 5) {
        bushPositions.push({
          position: new Vector3(x, 0.4, z),
          scale,
        });
      }
    }

    return bushPositions;
  }, []);

  return (
    <>
      {/* Trees */}
      {trees.map((tree, index) => (
        <Tree
          key={`tree-${index}`}
          position={tree.position}
          scale={tree.scale}
        />
      ))}

      {/* Bushes */}
      {bushes.map((bush, index) => (
        <Bush
          key={`bush-${index}`}
          position={bush.position}
          scale={bush.scale}
        />
      ))}

      {/* Rocks scattered around */}
      <mesh position={[4, 0.2, 3]} castShadow>
        <sphereGeometry args={[0.3, 6, 4]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      <mesh position={[-3, 0.15, 4]} castShadow>
        <sphereGeometry args={[0.25, 6, 4]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      <mesh position={[2, 0.1, -5]} castShadow>
        <sphereGeometry args={[0.2, 6, 4]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      <mesh position={[-8, 0.25, -2]} castShadow>
        <sphereGeometry args={[0.35, 6, 4]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      <mesh position={[7, 0.18, -6]} castShadow>
        <sphereGeometry args={[0.28, 6, 4]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      <mesh position={[-5, 0.12, 8]} castShadow>
        <sphereGeometry args={[0.22, 6, 4]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      <mesh position={[10, 0.3, 2]} castShadow>
        <sphereGeometry args={[0.4, 6, 4]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
      <mesh position={[-12, 0.2, 5]} castShadow>
        <sphereGeometry args={[0.25, 6, 4]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
    </>
  );
};
