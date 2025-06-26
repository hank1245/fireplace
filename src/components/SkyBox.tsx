import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SkyBoxProps {
  params?: {
    topColor: string;
    horizonColor: string;
    bottomColor: string;
    offset: number;
    exponent: number;
  };
}

export const SkyBox: React.FC<SkyBoxProps> = ({ params }) => {
  const skyRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const defaultParams = {
    topColor: "#87ceeb",
    horizonColor: "#ff69b4",
    bottomColor: "#4b0082",
    offset: 0.2,
    exponent: 0.8,
  };

  const skyParams = params || defaultParams;

  useFrame((state) => {
    if (skyRef.current) {
      // 하늘이 카메라를 따라 움직이도록
      skyRef.current.position.copy(state.camera.position);
    }
  });

  // params가 변경될 때 material uniform 업데이트
  useEffect(() => {
    if (materialRef.current) {
      console.log("Updating SkyBox uniforms:", skyParams);

      // 색상 값들을 직접 설정
      const material = materialRef.current;
      material.uniforms.topColor.value = new THREE.Color(skyParams.topColor);
      material.uniforms.horizonColor.value = new THREE.Color(
        skyParams.horizonColor
      );
      material.uniforms.bottomColor.value = new THREE.Color(
        skyParams.bottomColor
      );
      material.uniforms.offset.value = skyParams.offset;
      material.uniforms.exponent.value = skyParams.exponent;

      // 강제로 업데이트
      material.uniformsNeedUpdate = true;
      material.needsUpdate = true;
    }
  }, [skyParams]);

  return (
    <mesh ref={skyRef}>
      <sphereGeometry args={[100, 32, 16]} />
      <shaderMaterial
        ref={materialRef}
        side={THREE.BackSide}
        uniforms={{
          topColor: { value: new THREE.Color(skyParams.topColor) },
          horizonColor: { value: new THREE.Color(skyParams.horizonColor) },
          bottomColor: { value: new THREE.Color(skyParams.bottomColor) },
          offset: { value: skyParams.offset },
          exponent: { value: skyParams.exponent },
        }}
        vertexShader={`
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 topColor;
          uniform vec3 horizonColor;
          uniform vec3 bottomColor;
          uniform float offset;
          uniform float exponent;
          varying vec3 vWorldPosition;
          
          void main() {
            float h = normalize(vWorldPosition).y;
            
            // 하늘에서 지평선까지
            float skyMix = pow(max(h + offset, 0.0), exponent);
            vec3 skyColor = mix(horizonColor, topColor, skyMix);
            
            // 지평선에서 아래까지
            float groundMix = pow(max(-h + offset, 0.0), exponent * 0.5);
            vec3 finalColor = mix(skyColor, bottomColor, groundMix);
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `}
      />
    </mesh>
  );
};
