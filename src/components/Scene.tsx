import React from "react";
import { Fireplace } from "./Fireplace";
import { Forest } from "./Forest";
import { LogBench } from "./LogBench";
import { Character } from "./Character";
import { Lighting } from "./Lighting";
import { PortfolioBoard } from "./PortfolioBoard";
import { AudioSystem } from "./AudioSystem";
import { Player } from "./Player";

export const Scene: React.FC = () => {
  return (
    <>
      <Lighting />
      <Forest />
      <Fireplace />
      {/* 통나무들을 모닥불 중심으로 원형 배치 */}
      <LogBench
        position={[0, 0, 3]}
        rotation={[0, 0, 0] as [number, number, number]}
      />
      <LogBench
        position={[2.6, 0, 1.5]}
        rotation={[0, Math.PI / 3, 0] as [number, number, number]}
      />
      <LogBench
        position={[2.6, 0, -1.5]}
        rotation={[0, -Math.PI / 3, 0] as [number, number, number]}
      />
      <LogBench
        position={[0, 0, -3]}
        rotation={[0, Math.PI, 0] as [number, number, number]}
      />
      <LogBench
        position={[-2.6, 0, -1.5]}
        rotation={[0, (-Math.PI * 2) / 3, 0] as [number, number, number]}
      />
      <LogBench
        position={[-2.6, 0, 1.5]}
        rotation={[0, (Math.PI * 2) / 3, 0] as [number, number, number]}
      />
      <Character position={[4, 0, 0]} />
      <PortfolioBoard position={[-4, 0, -3]} />
      <AudioSystem />
      <Player />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#2d4a3a" />
      </mesh>
    </>
  );
};
