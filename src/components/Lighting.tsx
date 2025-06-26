import React from "react";

export const Lighting: React.FC = () => {
  return (
    <>
      {/* Ambient light for general scene illumination - increased intensity */}
      <ambientLight intensity={0.4} color="#6a7585" />

      {/* Moon light - increased intensity */}
      <directionalLight
        position={[10, 20, 5]}
        intensity={0.8}
        color="#c8d5e6"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Additional ambient lighting for brighter atmosphere */}
      <hemisphereLight args={["#4a5568", "#2d3748", 0.6]} />

      {/* Soft fill light for better visibility */}
      <directionalLight
        position={[-5, 10, -5]}
        intensity={0.3}
        color="#b8c5d6"
      />
    </>
  );
};
