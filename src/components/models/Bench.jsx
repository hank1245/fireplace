/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 bench.glb 
Author: Inuciian (https://sketchfab.com/Inuciian)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bench-d9bb6d6e392343268aa92ccea86ffba7
Title: Bench
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Bench(props) {
  const { nodes, materials } = useGLTF("/models/bench.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.bench_0.geometry}
          material={materials.bench_mat}
          position={[-3.491, -1.74, -0.04]}
          scale={1.488}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bench.glb");
