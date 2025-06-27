import React, { useEffect } from "react";

interface LightingProps {
  params?: {
    ambientIntensity: number;
    ambientColor: string;
    directionalIntensity: number;
    directionalColor: string;
    hemisphereIntensity: number;
    hemisphereColorSky: string;
    hemisphereColorGround: string;
    fillLightIntensity: number;
    fillLightColor: string;
  };
}

export const Lighting: React.FC<LightingProps> = ({ params }) => {
  const defaultParams = {
    ambientIntensity: 0.4,
    ambientColor: "#6a7585",
    directionalIntensity: 0.8,
    directionalColor: "#c8d5e6",
    hemisphereIntensity: 0.6,
    hemisphereColorSky: "#4a5568",
    hemisphereColorGround: "#2d3748",
    fillLightIntensity: 0.3,
    fillLightColor: "#b8c5d6",
  };

  const lightParams = params || defaultParams;

  return (
    <>
      {/* Ambient light for general scene illumination - increased intensity */}
      <ambientLight
        intensity={lightParams.ambientIntensity}
        color={lightParams.ambientColor}
      />

      {/* Moon light - increased intensity */}
      <directionalLight
        position={[10, 20, 5]}
        intensity={lightParams.directionalIntensity}
        color={lightParams.directionalColor}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
    </>
  );
};
