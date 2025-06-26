import React, { useEffect } from "react";
import { GUI } from "lil-gui";

interface GuiControlsProps {
  lightingParams: {
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
  skyBoxParams: {
    topColor: string;
    horizonColor: string;
    bottomColor: string;
    offset: number;
    exponent: number;
  };
  onLightingChange?: (params: any) => void;
  onSkyBoxChange?: (params: any) => void;
}

export const GuiControls: React.FC<GuiControlsProps> = ({
  lightingParams,
  skyBoxParams,
  onLightingChange,
  onSkyBoxChange,
}) => {
  useEffect(() => {
    console.log("GuiControls: Creating new GUI");
    const gui = new GUI();

    // 현재 파라미터들을 복사해서 사용
    const lightingControls = { ...lightingParams };
    const skyControls = { ...skyBoxParams };

    // 조명 폴더
    const lightingFolder = gui.addFolder("Lighting");
    lightingFolder
      .add(lightingControls, "ambientIntensity", 0, 2, 0.1)
      .name("Ambient Intensity")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .addColor(lightingControls, "ambientColor")
      .name("Ambient Color")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .add(lightingControls, "directionalIntensity", 0, 3, 0.1)
      .name("Directional Intensity")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .addColor(lightingControls, "directionalColor")
      .name("Directional Color")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .add(lightingControls, "hemisphereIntensity", 0, 2, 0.1)
      .name("Hemisphere Intensity")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .addColor(lightingControls, "hemisphereColorSky")
      .name("Hemisphere Sky")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    lightingFolder
      .addColor(lightingControls, "hemisphereColorGround")
      .name("Hemisphere Ground")
      .onChange(() => {
        console.log("Lighting changed:", lightingControls);
        onLightingChange?.(lightingControls);
      });

    // SkyBox 폴더
    const skyFolder = gui.addFolder("SkyBox");
    skyFolder
      .addColor(skyControls, "topColor")
      .name("Top Color")
      .onChange(() => {
        console.log("SkyBox changed:", skyControls);
        onSkyBoxChange?.(skyControls);
      });

    skyFolder
      .addColor(skyControls, "horizonColor")
      .name("Horizon Color")
      .onChange(() => {
        console.log("SkyBox changed:", skyControls);
        onSkyBoxChange?.(skyControls);
      });

    skyFolder
      .addColor(skyControls, "bottomColor")
      .name("Bottom Color")
      .onChange(() => {
        console.log("SkyBox changed:", skyControls);
        onSkyBoxChange?.(skyControls);
      });

    skyFolder
      .add(skyControls, "offset", 0, 1, 0.1)
      .name("Offset")
      .onChange(() => {
        console.log("SkyBox changed:", skyControls);
        onSkyBoxChange?.(skyControls);
      });

    skyFolder
      .add(skyControls, "exponent", 0.1, 2, 0.1)
      .name("Exponent")
      .onChange(() => {
        console.log("SkyBox changed:", skyControls);
        onSkyBoxChange?.(skyControls);
      });

    // 폴더 열기
    lightingFolder.open();
    skyFolder.open();

    return () => {
      gui.destroy();
    };
  }, [lightingParams, skyBoxParams, onLightingChange, onSkyBoxChange]);

  return null;
};
