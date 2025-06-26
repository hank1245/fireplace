import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./components/Scene";
import { UI } from "./components/UI";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Zoom 기능만 활성화된 OrbitControls */}
        <OrbitControls
          enableRotate={false}
          enablePan={false}
          enableZoom={true}
          minZoom={20}
          maxZoom={100}
          zoomSpeed={0.5}
        />
        <Scene />
      </Canvas>
      <UI />
    </div>
  );
}

export default App;
