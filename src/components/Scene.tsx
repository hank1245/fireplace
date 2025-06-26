import React, { useState, useCallback } from "react";
import { Fireplace } from "./Fireplace";
import { Forest } from "./Forest";
import { LogBench } from "./LogBench";
import { Character } from "./Character";
import { Lighting } from "./Lighting";
import { PortfolioBoard } from "./PortfolioBoard";
import { AudioSystem } from "./AudioSystem";
import { Player } from "./Player";
import { SkyBox } from "./SkyBox";
import { GuiControls } from "./GuiControls";

export const Scene: React.FC = () => {
  const [lightingParams, setLightingParams] = useState({
    ambientIntensity: 0.4,
    ambientColor: "#6a7585",
    directionalIntensity: 0.8,
    directionalColor: "#c8d5e6",
    hemisphereIntensity: 0.6,
    hemisphereColorSky: "#4a5568",
    hemisphereColorGround: "#2d3748",
    fillLightIntensity: 0.3,
    fillLightColor: "#b8c5d6",
  });

  const [skyBoxParams, setSkyBoxParams] = useState({
    topColor: "#87ceeb",
    horizonColor: "#ff69b4",
    bottomColor: "#4b0082",
    offset: 0.2,
    exponent: 0.8,
  });

  const handleLightingChange = useCallback((params: typeof lightingParams) => {
    console.log("Scene: Lighting params changed", params);
    setLightingParams(params);
  }, []);

  const handleSkyBoxChange = useCallback((params: typeof skyBoxParams) => {
    console.log("Scene: SkyBox params changed", params);
    setSkyBoxParams(params);
  }, []);
  return (
    <>
      <GuiControls
        lightingParams={lightingParams}
        skyBoxParams={skyBoxParams}
        onLightingChange={handleLightingChange}
        onSkyBoxChange={handleSkyBoxChange}
      />
      <SkyBox params={skyBoxParams} />
      <Lighting params={lightingParams} />
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
