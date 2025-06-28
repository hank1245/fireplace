import React, { useState, useRef, useEffect } from "react";
import { Character } from "./Character";
import { PortfolioBoard } from "./PortfolioBoard";
import { AudioSystem } from "./AudioSystem";
import { Player } from "./Player";
import { Sky, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Map from "./models/Map";
import { AmbientLight, PointLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { FireParticles } from "./FireParticles";

export const Scene: React.FC = () => {
  const cameraRef = useRef<any>(null);
  const controlsRef = useRef<any>(null);
  const pointLightRef = useRef<any>(null);

  // PointLight Helper 추가
  // useHelper(pointLightRef, PointLightHelper, 1, "orange");

  // 키보드로 카메라 위치 로그 출력
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "c" || event.key === "C") {
        if (cameraRef.current) {
          const camera = cameraRef.current;
          console.log("=== Current Camera State ===");
          console.log("Position:", camera.position);
          console.log("Rotation:", camera.rotation);
          if (controlsRef.current) {
            console.log("Target:", controlsRef.current.target);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      {/* 카메라 설정 - 초기 위치 지정 */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-2.88, 2, -2.95]} // 초기 카메라 위치 (x, y, z)
        fov={75}
        near={0.1}
        far={1000}
        rotation={[-3, -0.7, -3]}
      />

      {/* 카메라 컨트롤 - 바라보는 대상 지정 */}
      <OrbitControls
        ref={controlsRef}
        target={[0, 1, 0]} // 카메라가 바라보는 지점 (x, y, z)
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={50}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2} // 90도까지만 회전 (땅 아래로 못 봄)
      />

      <Sky
        sunPosition={[10000, -450, 10000]}
        turbidity={60}
        rayleigh={3}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
      />
      <Map position={[0, 0, 0]} scale={1} castShadow receiveShadow />
      <ambientLight intensity={0.7} />
      <pointLight
        ref={pointLightRef}
        position={[-1.6, 0.3, -1]}
        intensity={20}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color={"#FFC107"}
      />

      {/* 불 파티클 시스템 */}
      <FireParticles position={[-1.6, -0.33, -1]} />

      <Character position={[-1.4, 0, 2]} />
      <PortfolioBoard position={[1, 0, 2]} />
      <Player />
      {/* <AudioSystem /> */}
    </>
  );
};
