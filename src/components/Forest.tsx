import React, { useMemo } from "react";
import { Vector3 } from "three";
import { DeadTree } from "./models/Dead_tree";
import { PineTree } from "./models/Pine_tree";
import { DryGrass } from "./models/Dry_grass";
import { Rock } from "./models/Rock";

export const Forest: React.FC = () => {
  const pineTrees = useMemo(() => {
    const treePositions = [];
    const numTrees = 25;
    for (let i = 0; i < numTrees; i++) {
      const angle = (i / numTrees) * Math.PI * 2;
      const radius = 12 + Math.random() * 6;
      const x = Math.cos(angle) * radius - 5;
      const z = Math.sin(angle) * radius + 6;
      const scale = 0.6 + Math.random() * 0.1;

      treePositions.push({
        position: new Vector3(x, -0.4, z),
        scale,
        rotation: [0, 0, 0],
      });
    }

    return treePositions;
  }, []);

  const deadTrees = useMemo(() => {
    const treePositions = [];
    const numTrees = 15;

    for (let i = 0; i < numTrees; i++) {
      const angle = (i / numTrees) * Math.PI * 2;
      const radius = 10 + Math.random() * 10;
      const x = Math.cos(angle) * radius - 5;
      const z = Math.sin(angle) * radius + 6;
      const scale = 0.9 + Math.random() * 0.1;

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

  const grassPatches = useMemo(() => {
    const grassPositions = [];
    const numGrass = 50;

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
    const numRocks = 20;

    const predefinedPositions = [
      [4, 0.05, 3],
      [-3, 0.05, 4],
      [2, 0.05, -5],
      [-8, 0.05, -2],
      [7, 0.05, -6],
      [-5, 0.05, 8],
      [10, 0.05, 2],
      [-12, 0.05, 5],
    ];

    // 기존 위치들 추가
    predefinedPositions.forEach((pos) => {
      rockPositions.push({
        position: new Vector3(pos[0], pos[1] - Math.random() * 0.05, pos[2]),
        scale: 1.2 + Math.random() * 0.4,
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
          position: new Vector3(x, -0.05 + Math.random() * 0.05, z),
          scale: 1.2 + Math.random() * 0.3,
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
