import React, { useMemo } from "react";
import { Vector3 } from "three";
import { DeadTree } from "./models/Dead_tree";
import { PineTree } from "./models/Pine_tree";
import { DryGrass } from "./models/Dry_grass";
import { Rock } from "./models/Rock";

export const Forest: React.FC = () => {
  // Pine trees (가장 많이 배치 - 60개)
  const pineTrees = useMemo(() => {
    const treePositions = [];
    const numTrees = 30; // pine tree가 3배 더 많게

    for (let i = 0; i < numTrees; i++) {
      const angle = (i / numTrees) * Math.PI * 2;
      const radius = 12 + Math.random() * 6;
      const x = Math.cos(angle) * radius - 5;
      const z = Math.sin(angle) * radius + 6;
      const scale = 0.6 + Math.random() * 0.1;

      treePositions.push({
        position: new Vector3(x, -0.4, z),
        scale,
        rotation: [0, 0, 0], // 랜덤 회전
      });
    }

    return treePositions;
  }, []);

  // Dead trees (20개)
  const deadTrees = useMemo(() => {
    const treePositions = [];
    const numTrees = 10;

    for (let i = 0; i < numTrees; i++) {
      const angle = (i / numTrees) * Math.PI * 2;
      const radius = 10 + Math.random() * 10;
      const x = Math.cos(angle) * radius - 5;
      const z = Math.sin(angle) * radius + 6;
      const scale = 0.6 + Math.random() * 0.1;

      // 중앙 모닥불 주변은 피하기
      if (Math.sqrt(x * x + z * z) > 4) {
        treePositions.push({
          position: new Vector3(x, 0, z),
          scale,
          rotation: [0, 0, 0],
        });
      }
    }

    return treePositions;
  }, []);

  // Dry grass (40개)
  const grassPatches = useMemo(() => {
    const grassPositions = [];
    const numGrass = 40;

    for (let i = 0; i < numGrass; i++) {
      const x = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      const scale = 1 + Math.random();

      // 중앙 모닥불 주변은 피하기
      if (Math.sqrt(x * x + z * z) > 7) {
        grassPositions.push({
          position: new Vector3(x, -0.35, z),
          scale,
          rotation: [0, 0, 0],
        });
      }
    }

    return grassPositions;
  }, []);

  // Rocks (15개)
  const rocks = useMemo(() => {
    const rockPositions = [];
    const numRocks = 15;

    const predefinedPositions = [
      [4, 0.2, 3],
      [-3, 0.15, 4],
      [2, 0.1, -5],
      [-8, 0.25, -2],
      [7, 0.18, -6],
      [-5, 0.12, 8],
      [10, 0.3, 2],
      [-12, 0.2, 5],
    ];

    // 기존 위치들 추가
    predefinedPositions.forEach((pos) => {
      rockPositions.push({
        position: new Vector3(pos[0], pos[1], pos[2]),
        scale: 0.5 + Math.random() * 0.8,
        rotation: [0, 0, 0],
      });
    });

    // 추가 랜덤 위치
    for (let i = predefinedPositions.length; i < numRocks; i++) {
      const x = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;

      // 중앙 모닥불 주변은 피하기
      if (Math.sqrt(x * x + z * z) > 3) {
        rockPositions.push({
          position: new Vector3(x, 0.1 + Math.random() * 0.2, z),
          scale: 0.4 + Math.random() * 0.6,
          rotation: [0, 0, 0],
        });
      }
    }

    return rockPositions;
  }, []);

  return (
    <>
      {/* Pine Trees */}
      {pineTrees.map((tree, index) => (
        <PineTree
          key={`pine-tree-${index}`}
          position={tree.position}
          scale={tree.scale}
          rotation={tree.rotation}
          castShadow
          receiveShadow
        />
      ))}

      {/* Dead Trees */}
      {deadTrees.map((tree, index) => (
        <DeadTree
          key={`dead-tree-${index}`}
          position={tree.position}
          scale={tree.scale}
          rotation={tree.rotation}
          castShadow
          receiveShadow
        />
      ))}

      {/* Dry Grass */}
      {grassPatches.map((grass, index) => (
        <DryGrass
          key={`grass-${index}`}
          position={grass.position}
          scale={grass.scale}
          rotation={grass.rotation}
          castShadow
          receiveShadow
        />
      ))}

      {/* Rocks */}
      {rocks.map((rock, index) => (
        <Rock
          key={`rock-${index}`}
          position={rock.position}
          scale={rock.scale}
          rotation={rock.rotation}
          castShadow
          receiveShadow
        />
      ))}
    </>
  );
};
