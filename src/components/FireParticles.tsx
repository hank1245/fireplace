import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FireParticlesProps {
  position: [number, number, number];
}

export const FireParticles: React.FC<FireParticlesProps> = ({ position }) => {
  const meshRef = useRef<THREE.Points>(null);
  const particleCount = 500;

  const { positions, velocities, ages, maxAges, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const ages = new Float32Array(particleCount);
    const maxAges = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // 초기 위치 (원형으로 분산)
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.3;
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = Math.random() * 0.1;
      positions[i3 + 2] = Math.sin(angle) * radius;

      // 초기 속도
      velocities[i3] = (Math.random() - 0.5) * 0.002;
      velocities[i3 + 1] = Math.random() * 0.01 + 0.001;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;

      // 수명
      ages[i] = Math.random() * 2;
      maxAges[i] = 1.5 + Math.random() * 1;

      // 초기 색상 (주황/빨강)
      colors[i3] = 1; // R
      colors[i3 + 1] = 0.3 + Math.random() * 0.4; // G
      colors[i3 + 2] = 0; // B
    }

    return { positions, velocities, ages, maxAges, colors };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const positionsAttribute = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const colorsAttribute = meshRef.current.geometry.attributes
      .color as THREE.BufferAttribute;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // 나이 증가
      ages[i] += delta;

      // 파티클이 수명을 다했으면 리셋
      if (ages[i] >= maxAges[i]) {
        ages[i] = 0;

        // 새로운 시작 위치
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.3;
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(angle) * radius;

        // 새로운 속도
        velocities[i3] = (Math.random() - 0.5) * 0.002;
        velocities[i3 + 1] = Math.random() * 0.01 + 0.001;
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.002;

        maxAges[i] = 1.5 + Math.random() * 1;
      }

      // 위치 업데이트
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // 바람 효과 (위로 올라갈수록 더 흔들림)
      const windStrength = positions[i3 + 1] * 0.1;
      positions[i3] +=
        Math.sin(state.clock.elapsedTime * 2 + i) * windStrength * delta;
      positions[i3 + 2] +=
        Math.cos(state.clock.elapsedTime * 1.5 + i) * windStrength * delta;

      // 색상 변화 (아래쪽은 주황/빨강, 위쪽은 연한 주황/노랑)
      const lifeRatio = ages[i] / maxAges[i];
      const height = positions[i3 + 1];

      if (height < 0.3) {
        // 아래쪽: 빨강-주황
        colors[i3] = 1;
        colors[i3 + 1] = 0.2 + height * 2;
        colors[i3 + 2] = 0;
      } else {
        // 위쪽: 주황-노랑-투명
        colors[i3] = 1;
        colors[i3 + 1] = 0.8 + (height - 0.3) * 0.5;
        colors[i3 + 2] = height * 0.3;
      }

      // 투명도 (수명에 따라)
      const alpha = 1 - lifeRatio;
      colors[i3] *= alpha;
      colors[i3 + 1] *= alpha;
      colors[i3 + 2] *= alpha;

      // BufferAttribute에 직접 값 설정
      positionsAttribute.setXYZ(
        i,
        positions[i3],
        positions[i3 + 1],
        positions[i3 + 2]
      );
      colorsAttribute.setXYZ(i, colors[i3], colors[i3 + 1], colors[i3 + 2]);
    }

    positionsAttribute.needsUpdate = true;
    colorsAttribute.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
  }, []);

  return (
    <points
      ref={meshRef}
      position={position}
      geometry={geometry}
      material={material}
    />
  );
};
