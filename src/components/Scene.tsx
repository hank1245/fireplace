import React, { useState } from "react";
import { Fireplace } from "./Fireplace";
import { Forest } from "./Forest";
import { LogBench } from "./LogBench";
import { Character } from "./Character";
import { Lighting } from "./Lighting";
import { PortfolioBoard } from "./PortfolioBoard";
import { AudioSystem } from "./AudioSystem";
import { Player } from "./Player";
import { Sky } from "@react-three/drei";

export const Scene: React.FC = () => {
  const [lightingParams, setLightingParams] = useState({
    ambientIntensity: 1.8,
    ambientColor: "white",
    directionalIntensity: 0.8,
    directionalColor: "#c8d5e6",
    hemisphereIntensity: 0.6,
    hemisphereColorSky: "#4a5568",
    hemisphereColorGround: "#2d3748",
    fillLightIntensity: 0.3,
    fillLightColor: "#b8c5d6",
  });

  return (
    <>
      {/* 석양을 위한 태양 위치 조정 */}
      <Sky
        sunPosition={[0, -0.25, -10]}
        turbidity={60}
        rayleigh={3}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
      />
      <Lighting params={lightingParams} />
      <Forest />
      <Fireplace />
      {/* 통나무들을 모닥불 중심으로 원형 배치 */}

      <LogBench position={[0, 0.1, 0]} rotation={[0, 0, 0]} />
      <LogBench position={[0, 0.1, 2]} rotation={[0, 0, 0]} />
      <LogBench position={[0, 0.1, 3]} rotation={[0, Math.PI / 2, 0]} />
      <LogBench position={[0, 0.1, 1]} rotation={[0, Math.PI / 2, 0]} />

      <Character position={[4, 0, 0]} />
      <PortfolioBoard position={[-4, 0, -3]} />
      {/* <AudioSystem /> */}
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
