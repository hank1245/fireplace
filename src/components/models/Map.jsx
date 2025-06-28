import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Map(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/map.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group
              name="bat"
              position={[3.278, 4.263, 4.593]}
              rotation={[0.399, 0.319, 1.824]}
            />
            <group
              name="boat"
              position={[-11.981, -0.067, -0.164]}
              rotation={[0.107, 0.11, -0.69]}
              scale={1.006}
            >
              <group
                name="cross"
                position={[0.345, -0.85, 1.08]}
                rotation={[-0.014, -0.152, -0.86]}
                scale={0.994}
              />
              <group
                name="oar"
                position={[-0.288, -0.659, 0.465]}
                rotation={[-0.204, -0.443, -0.433]}
                scale={0.994}
              >
                <mesh
                  name="oar_0"
                  geometry={nodes.oar_0.geometry}
                  material={materials.wood_mat}
                />
              </group>
              <group
                name="oar001"
                position={[0.14, -0.604, 0.409]}
                rotation={[-0.138, 0.323, -2.84]}
                scale={0.994}
              >
                <mesh
                  name="oar001_0"
                  geometry={nodes.oar001_0.geometry}
                  material={materials.wood_mat}
                />
              </group>
              <group
                name="sword"
                position={[0.242, 1.025, 0.861]}
                rotation={[2.571, -0.556, 2.156]}
                scale={0.994}
              />
              <group
                name="knight"
                position={[-0.1, 0.942, 0.039]}
                rotation={[-0.014, -0.152, 0.148]}
                scale={0.994}
              />
              <group
                name="monk"
                position={[-0.072, -1.145, -0.19]}
                rotation={[-0.029, 0.055, -0.028]}
                scale={0.994}
              />
              <group
                name="peasent"
                position={[-0.005, -0.482, -0.423]}
                rotation={[-0.122, -0.126, 2.966]}
                scale={0.994}
              />
              <mesh
                name="boat_0"
                geometry={nodes.boat_0.geometry}
                material={materials.boat_mat}
              />
            </group>
            <group
              name="broom002"
              position={[-6.159, -3.253, 2.648]}
              rotation={[1.005, 0.386, 2.363]}
            >
              <group
                name="Imp"
                position={[-0.065, -0.011, 0.13]}
                rotation={[0.422, 0.757, 1.069]}
              />
            </group>
            <group
              name="cage"
              position={[-2.19, -5.996, 3.415]}
              rotation={[0.003, -0.001, -0.133]}
              scale={1.372}
            />
            <group
              name="Cylinder034"
              position={[-1.742, 1.009, -0.466]}
              rotation={[-0.651, -0.786, -1.097]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder034_0"
                geometry={nodes.Cylinder034_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="fire001"
              position={[3.51, -2.796, 5.202]}
              rotation={[0, 0, 0.002]}
              scale={[0.116, 0.116, 0.194]}
            >
              <mesh
                name="fire001_0"
                geometry={nodes.fire001_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fire002"
              position={[3.616, -2.735, 5.047]}
              rotation={[0, 0, 0.004]}
              scale={[0.116, 0.116, 0.194]}
            >
              <mesh
                name="fire002_0"
                geometry={nodes.fire002_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire002_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire002_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fire003"
              position={[3.779, 3.241, 0.991]}
              rotation={[0, 0, 0.002]}
              scale={[0.116, 0.116, 0.194]}
            >
              <mesh
                name="fire003_0"
                geometry={nodes.fire003_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire003_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire003_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fire004"
              position={[3.694, 3.371, 0.7]}
              rotation={[0, 0, 0.002]}
              scale={[0.116, 0.116, 0.194]}
            >
              <mesh
                name="fire004_0"
                geometry={nodes.fire004_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire004_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire004_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fire005"
              position={[-3.071, -2.39, 1.001]}
              rotation={[0, 0, 0.002]}
              scale={[0.116, 0.116, 0.194]}
            >
              <mesh
                name="fire005_0"
                geometry={nodes.fire005_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire005_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire005_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fire006"
              position={[-3.552, -6.233, 1.364]}
              rotation={[0.146, 0.196, -0.061]}
              scale={[0.489, 0.489, 0.817]}
            >
              <mesh
                name="fire006_0"
                geometry={nodes.fire006_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire006_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire006_0.morphTargetInfluences}
              />
            </group>
            <group
              name="lady"
              position={[-2.19, -5.996, 3.415]}
              rotation={[0, 0, -0.104]}
            />
            <group
              name="rat001"
              position={[2.71, 4.619, 0.17]}
              rotation={[-0.068, -0.008, 2.816]}
            >
              <mesh
                name="rat001_0"
                geometry={nodes.rat001_0.geometry}
                material={materials.rat_mat}
                morphTargetDictionary={nodes.rat001_0.morphTargetDictionary}
                morphTargetInfluences={nodes.rat001_0.morphTargetInfluences}
              />
            </group>
            <group
              name="bench"
              position={[-3.491, -1.74, -0.04]}
              rotation={[-0.023, -0.007, 0.656]}
              scale={1.488}
            >
              <mesh
                name="bench_0"
                geometry={nodes.bench_0.geometry}
                material={materials.bench_mat}
              />
            </group>
            <group
              name="book_1"
              position={[3.013, -2.784, 3.854]}
              rotation={[0.022, -0.042, -2.03]}
            >
              <mesh
                name="book_1_0"
                geometry={nodes.book_1_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1001"
              position={[-3.847, -1.304, 0.389]}
              rotation={[-0.001, -0.009, -1.595]}
            >
              <mesh
                name="book_1001_0"
                geometry={nodes.book_1001_0.geometry}
                material={materials.book_1_mat}
              />
            </group>
            <group
              name="book_1002"
              position={[2.193, -2.163, 4.667]}
              rotation={[-0.283, 0.775, 1.943]}
            >
              <mesh
                name="book_1002_0"
                geometry={nodes.book_1002_0.geometry}
                material={materials.book_1_mat}
              />
            </group>
            <group
              name="book_1003"
              position={[4.443, -1.033, 4.64]}
              rotation={[-0.054, -0.072, -0.897]}
              scale={0.806}
            >
              <mesh
                name="book_1003_0"
                geometry={nodes.book_1003_0.geometry}
                material={materials.book_3_mat}
              />
            </group>
            <group
              name="book_1005"
              position={[2.734, -3.137, 4.134]}
              rotation={[0.007, -1.123, -1.546]}
              scale={0.761}
            >
              <mesh
                name="book_1005_0"
                geometry={nodes.book_1005_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1006"
              position={[2.992, -3.124, 4.121]}
              rotation={[2.307, -1.552, 0.785]}
              scale={0.663}
            >
              <mesh
                name="book_1006_0"
                geometry={nodes.book_1006_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1008"
              position={[2.795, -3.179, 4.633]}
              rotation={[-0.032, 0.082, -3.052]}
              scale={0.911}
            >
              <mesh
                name="book_1008_0"
                geometry={nodes.book_1008_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1009"
              position={[2.795, -3.179, 4.729]}
              rotation={[-0.01, 0.082, 2.728]}
              scale={0.916}
            >
              <mesh
                name="book_1009_0"
                geometry={nodes.book_1009_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1011"
              position={[4.443, -1.033, 4.548]}
              rotation={[0.012, -0.027, -1.401]}
              scale={0.885}
            >
              <mesh
                name="book_1011_0"
                geometry={nodes.book_1011_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1012"
              position={[4.41, -0.83, 4.173]}
              rotation={[1.329, 0.236, 0.058]}
              scale={0.806}
            >
              <mesh
                name="book_1012_0"
                geometry={nodes.book_1012_0.geometry}
                material={materials.book_2_mat}
              />
            </group>
            <group
              name="book_1013"
              position={[2.795, -3.179, 4.529]}
              rotation={[-0.031, 0.002, 2.724]}
            >
              <mesh
                name="book_1013_0"
                geometry={nodes.book_1013_0.geometry}
                material={materials.book_3_mat}
              />
            </group>
            <group
              name="book_1014"
              position={[2.882, -3.138, 4.168]}
              rotation={[2.307, -1.552, 0.785]}
              scale={0.876}
            >
              <mesh
                name="book_1014_0"
                geometry={nodes.book_1014_0.geometry}
                material={materials.book_3_mat}
              />
            </group>
            <group
              name="book_1015"
              position={[3.064, -2.815, 3.974]}
              rotation={[0.01, -0.047, -1.487]}
              scale={[0.755, 0.755, 1.397]}
            >
              <mesh
                name="book_1015_0"
                geometry={nodes.book_1015_0.geometry}
                material={materials.book_3_mat}
              />
            </group>
            <group name="bottle_1" position={[2.609, -3.089, 5.054]}>
              <mesh
                name="bottle_1_0"
                geometry={nodes.bottle_1_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1001"
              position={[3.894, -2.68, 4.843]}
              rotation={[-0.177, -0.046, 0.023]}
              scale={[1, 1, 0.62]}
            >
              <mesh
                name="bottle_1001_0"
                geometry={nodes.bottle_1001_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group name="bottle_1002" position={[2.536, -3.042, 4.055]}>
              <mesh
                name="bottle_1002_0"
                geometry={nodes.bottle_1002_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group name="bottle_1003" position={[2.345, -3.232, 4.055]}>
              <mesh
                name="bottle_1003_0"
                geometry={nodes.bottle_1003_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1004"
              position={[-3.419, -1.562, 0.473]}
              rotation={[0, 0, 0.295]}
            >
              <mesh
                name="bottle_1004_0"
                geometry={nodes.bottle_1004_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1005"
              position={[4.114, -2.672, 4.853]}
              rotation={[-0.158, -0.01, 0.557]}
              scale={[1, 1, 0.62]}
            >
              <mesh
                name="bottle_1005_0"
                geometry={nodes.bottle_1005_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group name="bottle_1006" position={[4.477, -1.385, 4.083]}>
              <mesh
                name="bottle_1006_0"
                geometry={nodes.bottle_1006_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1007"
              position={[4.499, -1.414, 4.579]}
              scale={[1.66, 1.66, 0.995]}
            >
              <mesh
                name="bottle_1007_0"
                geometry={nodes.bottle_1007_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1008"
              position={[2.232, -1.661, 3.933]}
              scale={1.319}
            >
              <mesh
                name="bottle_1008_0"
                geometry={nodes.bottle_1008_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_1009"
              position={[2.121, -1.376, 3.944]}
              scale={1.465}
            >
              <mesh
                name="bottle_1009_0"
                geometry={nodes.bottle_1009_0.geometry}
                material={materials.bottle_1_mat}
              />
            </group>
            <group
              name="bottle_2"
              position={[-3.594, -1.861, 0.473]}
              rotation={[0.007, -0.079, 1.777]}
            >
              <mesh
                name="bottle_2_0"
                geometry={nodes.bottle_2_0.geometry}
                material={materials.bottle_2_mat}
              />
            </group>
            <group
              name="bottle_2001"
              position={[2.226, -2.753, 3.912]}
              rotation={[0.034, 0.036, 0.649]}
              scale={1.116}
            >
              <mesh
                name="bottle_2001_0"
                geometry={nodes.bottle_2001_0.geometry}
                material={materials.bottle_2_mat}
              />
            </group>
            <group
              name="bottle_2002"
              position={[4.37, -1.091, 4.081]}
              rotation={[0.034, 0.036, 0.649]}
              scale={1.116}
            >
              <mesh
                name="bottle_2002_0"
                geometry={nodes.bottle_2002_0.geometry}
                material={materials.bottle_2_mat}
              />
            </group>
            <group
              name="bottle_2003"
              position={[4.637, -1.264, 4.086]}
              rotation={[-0.018, 0.05, 0.665]}
              scale={1.116}
            >
              <mesh
                name="bottle_2003_0"
                geometry={nodes.bottle_2003_0.geometry}
                material={materials.bottle_2_mat}
              />
            </group>
            <group
              name="bottle_2004"
              position={[2.345, -3.003, 4.54]}
              rotation={[0.032, 0.011, 0.641]}
              scale={0.903}
            >
              <mesh
                name="bottle_2004_0"
                geometry={nodes.bottle_2004_0.geometry}
                material={materials.bottle_2_mat}
              />
            </group>
            <group
              name="broom"
              position={[1.343, -0.219, 0.52]}
              rotation={[0.147, -0.332, 0.042]}
            >
              <mesh
                name="broom_0"
                geometry={nodes.broom_0.geometry}
                material={materials.broom__mat}
              />
            </group>
            <group
              name="broom001"
              position={[4.677, -1.887, 4.236]}
              rotation={[-0.283, 0.164, 0.437]}
            >
              <mesh
                name="broom001_0"
                geometry={nodes.broom001_0.geometry}
                material={materials.broom__mat}
              />
            </group>
            <group
              name="bucket"
              position={[-2.601, 5.131, -0.222]}
              rotation={[-0.038, -0.026, -0.002]}
            />
            <group
              name="bucket001"
              position={[4.577, -1.979, 3.834]}
              rotation={[0.011, 0.008, 0.524]}
            >
              <mesh
                name="bucket001_0"
                geometry={nodes.bucket001_0.geometry}
                material={materials.bucket_mat}
              />
            </group>
            <group
              name="bush_1"
              position={[4.662, 8.618, -0.06]}
              rotation={[-0.113, 0.022, 1.348]}
              scale={[1.627, 1.631, 1.058]}
            >
              <mesh
                name="bush_1_0"
                geometry={nodes.bush_1_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1001"
              position={[-4.552, -4.388, -0.053]}
              rotation={[0.051, -0.04, 0.311]}
              scale={[1.65, 1.65, 1.32]}
            >
              <mesh
                name="bush_1001_0"
                geometry={nodes.bush_1001_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1002"
              position={[10.754, 8.418, 0.444]}
              rotation={[-0.039, -0.249, -3.057]}
              scale={[2.152, 2.427, 1.682]}
            >
              <mesh
                name="bush_1002_0"
                geometry={nodes.bush_1002_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1003"
              position={[5.447, -0.072, 0.287]}
              rotation={[-0.005, -0.065, -0.68]}
              scale={[1.48, 1.48, 1.184]}
            >
              <mesh
                name="bush_1003_0"
                geometry={nodes.bush_1003_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1004"
              position={[-7.207, -10.892, 1.395]}
              rotation={[-0.211, -0.213, 0.086]}
              scale={[2.661, 2.667, 1.73]}
            >
              <mesh
                name="bush_1004_0"
                geometry={nodes.bush_1004_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1005"
              position={[-15.326, 17.983, 0.865]}
              rotation={[0.286, -0.129, -1.055]}
              scale={[5.234, 5.903, 4.092]}
            >
              <mesh
                name="bush_1005_0"
                geometry={nodes.bush_1005_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1006"
              position={[-19.155, 3.321, 1.086]}
              rotation={[0.178, -0.023, 2.602]}
              scale={[3.769, 3.769, 3.015]}
            >
              <mesh
                name="bush_1006_0"
                geometry={nodes.bush_1006_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1007"
              position={[-0.312, 22.216, 1.654]}
              rotation={[0.235, 0.127, 1.851]}
              scale={[3.45, 3.45, 2.76]}
            >
              <mesh
                name="bush_1007_0"
                geometry={nodes.bush_1007_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1009"
              position={[-18.809, 10.941, -0.603]}
              rotation={[-0.07, -0.121, 2.222]}
              scale={[3.622, 4.048, 3.782]}
            >
              <mesh
                name="bush_1009_0"
                geometry={nodes.bush_1009_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1010"
              position={[-23.039, 5.199, 0.027]}
              rotation={[0.107, 0.065, -2.597]}
              scale={[3.521, 3.934, 3.676]}
            >
              <mesh
                name="bush_1010_0"
                geometry={nodes.bush_1010_0.geometry}
                material={materials.bush_2_mat}
              />
            </group>
            <group
              name="bush_1011"
              position={[6.755, -3.703, 0.126]}
              rotation={[-0.277, -0.027, -2.654]}
              scale={[1.957, 1.979, 1.835]}
            >
              <mesh
                name="bush_1011_0"
                geometry={nodes.bush_1011_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1012"
              position={[2.771, 10.005, -0.063]}
              rotation={[-0.47, -0.22, -2.433]}
              scale={[1.946, 1.946, 1.557]}
            >
              <mesh
                name="bush_1012_0"
                geometry={nodes.bush_1012_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="bush_1013"
              position={[-7.008, 23.211, 0.678]}
              rotation={[0.075, -0.05, 2.334]}
              scale={[3.701, 4.136, 3.864]}
            >
              <mesh
                name="bush_1013_0"
                geometry={nodes.bush_1013_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="candle"
              position={[3.624, -2.727, 4.746]}
              rotation={[0.014, -0.021, -0.492]}
              scale={[1, 1, 0.83]}
            >
              <mesh
                name="candle_0"
                geometry={nodes.candle_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle001"
              position={[-3.055, -2.395, 0.374]}
              rotation={[-0.005, -0.031, -2.904]}
              scale={[1.28, 1.28, 1.68]}
            >
              <mesh
                name="candle001_0"
                geometry={nodes.candle001_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle002"
              position={[-2.999, -2.166, 0.373]}
              rotation={[-0.057, -0.082, 2.34]}
            >
              <mesh
                name="candle002_0"
                geometry={nodes.candle002_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle003"
              position={[-2.57, -2.487, -0.015]}
              rotation={[0.005, -0.004, -1.481]}
              scale={[1.2, 1.2, 1]}
            >
              <mesh
                name="candle003_0"
                geometry={nodes.candle003_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle004"
              position={[3.522, -2.795, 4.725]}
              rotation={[0.011, -0.022, -0.62]}
              scale={[1, 1, 1.29]}
            >
              <mesh
                name="candle004_0"
                geometry={nodes.candle004_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle005"
              position={[3.726, 3.359, 0.361]}
              rotation={[-0.026, -0.095, -1.128]}
              scale={[1, 1, 0.91]}
            >
              <mesh
                name="candle005_0"
                geometry={nodes.candle005_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle006"
              position={[3.887, 3.384, 0.341]}
              rotation={[-0.021, -0.034, 2.817]}
              scale={[1.113, 1.113, 1.242]}
            >
              <mesh
                name="candle006_0"
                geometry={nodes.candle006_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="candle007"
              position={[3.845, 3.251, 0.34]}
              rotation={[0.014, -0.103, -2.88]}
              scale={[1.17, 1.17, 1.715]}
            >
              <mesh
                name="candle007_0"
                geometry={nodes.candle007_0.geometry}
                material={materials.candle_material}
              />
            </group>
            <group
              name="cattail_plant"
              position={[-6.685, 2.67, -0.642]}
              rotation={[0.022, 0.072, 0.1]}
            >
              <mesh
                name="cattail_plant_0"
                geometry={nodes.cattail_plant_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant001"
              position={[-6.122, 2.651, -0.642]}
              rotation={[-0.035, 0.067, 0.879]}
              scale={1.066}
            >
              <mesh
                name="cattail_plant001_0"
                geometry={nodes.cattail_plant001_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant002"
              position={[-5.999, 2.422, -0.487]}
              rotation={[0.135, -0.048, 0.113]}
              scale={0.862}
            >
              <mesh
                name="cattail_plant002_0"
                geometry={nodes.cattail_plant002_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant003"
              position={[-6.399, 2.089, -0.591]}
              rotation={[-0.074, -0.157, 0.043]}
              scale={0.921}
            >
              <mesh
                name="cattail_plant003_0"
                geometry={nodes.cattail_plant003_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant004"
              position={[-6.087, 1.87, -0.591]}
              rotation={[0.141, -0.084, 0.734]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant004_0"
                geometry={nodes.cattail_plant004_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant005"
              position={[-6.351, 1.799, -0.578]}
              rotation={[0.1, -0.009, -2.208]}
              scale={0.813}
            >
              <mesh
                name="cattail_plant005_0"
                geometry={nodes.cattail_plant005_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant006"
              position={[-6.425, 1.394, -0.568]}
              rotation={[-0.026, 0.038, -0.236]}
              scale={0.939}
            >
              <mesh
                name="cattail_plant006_0"
                geometry={nodes.cattail_plant006_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant007"
              position={[-6.893, 1.726, -0.795]}
              rotation={[0.036, 0.002, -2.91]}
              scale={1.024}
            >
              <mesh
                name="cattail_plant007_0"
                geometry={nodes.cattail_plant007_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant008"
              position={[-6.789, 2.903, -0.69]}
              rotation={[-0.064, 0.04, 1.409]}
              scale={0.953}
            >
              <mesh
                name="cattail_plant008_0"
                geometry={nodes.cattail_plant008_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant009"
              position={[-6.984, 3.316, -0.69]}
              rotation={[0.009, -0.032, 2.409]}
              scale={0.971}
            >
              <mesh
                name="cattail_plant009_0"
                geometry={nodes.cattail_plant009_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant010"
              position={[-6.715, 3.5, -0.571]}
              rotation={[-0.013, -0.007, 0.032]}
              scale={0.878}
            >
              <mesh
                name="cattail_plant010_0"
                geometry={nodes.cattail_plant010_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant011"
              position={[-6.263, 3.727, -0.571]}
              rotation={[-0.005, -0.014, 0.81]}
              scale={0.8}
            >
              <mesh
                name="cattail_plant011_0"
                geometry={nodes.cattail_plant011_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant012"
              position={[-6.611, 3.944, -0.734]}
              rotation={[-0.127, 0.002, 1.727]}
              scale={0.8}
            >
              <mesh
                name="cattail_plant012_0"
                geometry={nodes.cattail_plant012_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant013"
              position={[-7.01, 4.253, -0.734]}
              rotation={[-0.127, 0.002, 1.727]}
              scale={0.936}
            >
              <mesh
                name="cattail_plant013_0"
                geometry={nodes.cattail_plant013_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant014"
              position={[-6.403, 4.4, -0.734]}
              rotation={[0.099, 0.051, -0.35]}
              scale={0.936}
            >
              <mesh
                name="cattail_plant014_0"
                geometry={nodes.cattail_plant014_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant015"
              position={[-5.081, 5.105, -0.447]}
              rotation={[-0.022, 0.098, 0.369]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant015_0"
                geometry={nodes.cattail_plant015_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant016"
              position={[-4.363, 5.227, -0.391]}
              rotation={[0.073, -0.004, -1.346]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant016_0"
                geometry={nodes.cattail_plant016_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant017"
              position={[-4.363, 5.375, -0.373]}
              rotation={[-0.063, -0.007, 0.064]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant017_0"
                geometry={nodes.cattail_plant017_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant018"
              position={[-4.749, 5.515, -0.4]}
              rotation={[-0.063, -0.007, 0.064]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant018_0"
                geometry={nodes.cattail_plant018_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant019"
              position={[-4.843, 6.015, -0.45]}
              rotation={[0.028, -0.088, 1.846]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant019_0"
                geometry={nodes.cattail_plant019_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant020"
              position={[-4.739, 6.106, -0.482]}
              rotation={[-0.142, 0.052, 2.07]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant020_0"
                geometry={nodes.cattail_plant020_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant021"
              position={[-5.428, 5.779, -0.502]}
              rotation={[0.071, -0.104, 2.981]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant021_0"
                geometry={nodes.cattail_plant021_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant022"
              position={[-5.229, 6.322, -0.525]}
              rotation={[0.016, -0.168, 2.973]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant022_0"
                geometry={nodes.cattail_plant022_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant023"
              position={[-4.17, 6.277, -0.55]}
              rotation={[-0.068, 0.039, 1.443]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant023_0"
                geometry={nodes.cattail_plant023_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant024"
              position={[-4.014, 5.898, -0.473]}
              rotation={[0.091, -0.003, -1.536]}
              scale={0.971}
            >
              <mesh
                name="cattail_plant024_0"
                geometry={nodes.cattail_plant024_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant025"
              position={[-3.69, 5.742, -0.467]}
              rotation={[0.096, -0.076, -1.51]}
              scale={1.093}
            >
              <mesh
                name="cattail_plant025_0"
                geometry={nodes.cattail_plant025_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant026"
              position={[-3.289, 6.144, -0.594]}
              rotation={[-0.073, 0.087, -0.064]}
              scale={1.169}
            >
              <mesh
                name="cattail_plant026_0"
                geometry={nodes.cattail_plant026_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant027"
              position={[-3.71, 6.127, -0.547]}
              rotation={[0.05, 0.139, -2.438]}
              scale={1.132}
            >
              <mesh
                name="cattail_plant027_0"
                geometry={nodes.cattail_plant027_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant028"
              position={[-3.007, 5.657, -0.493]}
              rotation={[0.102, -0.086, -1.504]}
              scale={1.176}
            >
              <mesh
                name="cattail_plant028_0"
                geometry={nodes.cattail_plant028_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant029"
              position={[-2.871, 6.009, -0.635]}
              rotation={[-0.009, 0.031, 1.51]}
              scale={1.049}
            >
              <mesh
                name="cattail_plant029_0"
                geometry={nodes.cattail_plant029_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant030"
              position={[-0.565, 8.416, -0.819]}
              rotation={[-0.007, -0.03, 2.179]}
              scale={1.049}
            >
              <mesh
                name="cattail_plant030_0"
                geometry={nodes.cattail_plant030_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant031"
              position={[-0.46, 8.053, -0.679]}
              rotation={[0.047, 0.129, -0.894]}
              scale={1.176}
            >
              <mesh
                name="cattail_plant031_0"
                geometry={nodes.cattail_plant031_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant032"
              position={[-1.3, 7.987, -0.775]}
              rotation={[-0.028, 0.092, -1.763]}
              scale={1.132}
            >
              <mesh
                name="cattail_plant032_0"
                geometry={nodes.cattail_plant032_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant033"
              position={[-0.979, 8.262, -0.801]}
              rotation={[-0.049, -0.136, 0.61]}
              scale={1.169}
            >
              <mesh
                name="cattail_plant033_0"
                geometry={nodes.cattail_plant033_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant034"
              position={[-1.049, 7.695, -0.688]}
              rotation={[0.092, 0.006, -0.865]}
              scale={1.093}
            >
              <mesh
                name="cattail_plant034_0"
                geometry={nodes.cattail_plant034_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant035"
              position={[-1.399, 7.618, -0.713]}
              rotation={[0.092, 0.006, -0.865]}
              scale={0.971}
            >
              <mesh
                name="cattail_plant035_0"
                geometry={nodes.cattail_plant035_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant036"
              position={[-1.753, 7.819, -0.803]}
              rotation={[-0.11, -0.082, 2.09]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant036_0"
                geometry={nodes.cattail_plant036_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant037"
              position={[-1.352, 6.989, -0.623]}
              rotation={[-0.025, -0.093, 0.732]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant037_0"
                geometry={nodes.cattail_plant037_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant038"
              position={[-1.26, 6.873, -0.639]}
              rotation={[0.079, -0.006, -0.674]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant038_0"
                geometry={nodes.cattail_plant038_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant039"
              position={[-0.902, 10.099, -0.691]}
              rotation={[0.004, -0.058, -2.053]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant039_0"
                geometry={nodes.cattail_plant039_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant040"
              position={[-0.806, 10.212, -0.678]}
              rotation={[-0.102, 0.028, -0.643]}
              scale={0.875}
            >
              <mesh
                name="cattail_plant040_0"
                geometry={nodes.cattail_plant040_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant041"
              position={[-0.304, 10.181, -0.622]}
              rotation={[-0.166, -0.061, 2.12]}
              scale={1.001}
            >
              <mesh
                name="cattail_plant041_0"
                geometry={nodes.cattail_plant041_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant042"
              position={[0.057, 9.995, -0.53]}
              rotation={[0.034, 0.032, -0.839]}
              scale={0.971}
            >
              <mesh
                name="cattail_plant042_0"
                geometry={nodes.cattail_plant042_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant043"
              position={[0.393, 10.062, -0.454]}
              rotation={[0.032, 0.113, -0.778]}
              scale={1.093}
            >
              <mesh
                name="cattail_plant043_0"
                geometry={nodes.cattail_plant043_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant044"
              position={[0.474, 10.632, -0.541]}
              rotation={[-0.043, -0.256, 0.65]}
              scale={1.169}
            >
              <mesh
                name="cattail_plant044_0"
                geometry={nodes.cattail_plant044_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant045"
              position={[0.152, 10.356, -0.555]}
              rotation={[0.005, -0.009, -1.764]}
              scale={1.132}
            >
              <mesh
                name="cattail_plant045_0"
                geometry={nodes.cattail_plant045_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant046"
              position={[0.978, 10.418, -0.373]}
              rotation={[0.079, 0.028, -0.887]}
              scale={1.176}
            >
              <mesh
                name="cattail_plant046_0"
                geometry={nodes.cattail_plant046_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant047"
              position={[0.887, 10.786, -0.511]}
              rotation={[0.047, -0.076, 2.149]}
              scale={1.049}
            >
              <mesh
                name="cattail_plant047_0"
                geometry={nodes.cattail_plant047_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant048"
              position={[-7.316, -0.595, -0.948]}
              rotation={[-0.095, -0.075, 1.204]}
              scale={0.953}
            >
              <mesh
                name="cattail_plant048_0"
                geometry={nodes.cattail_plant048_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant049"
              position={[-7.601, -1.66, -0.737]}
              rotation={[0.057, -0.155, -2.393]}
              scale={0.813}
            >
              <mesh
                name="cattail_plant049_0"
                geometry={nodes.cattail_plant049_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant050"
              position={[-7.329, -1.642, -0.716]}
              rotation={[-0.071, -0.258, 0.539]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant050_0"
                geometry={nodes.cattail_plant050_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant051"
              position={[-7.589, -1.367, -0.761]}
              rotation={[-0.147, -0.265, -0.17]}
              scale={0.921}
            >
              <mesh
                name="cattail_plant051_0"
                geometry={nodes.cattail_plant051_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant052"
              position={[-7.148, -1.113, -0.61]}
              rotation={[0.084, -0.199, -0.068]}
              scale={0.862}
            >
              <mesh
                name="cattail_plant052_0"
                geometry={nodes.cattail_plant052_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant053"
              position={[-7.204, -0.871, -0.784]}
              rotation={[-0.062, -0.054, 0.678]}
              scale={1.066}
            >
              <mesh
                name="cattail_plant053_0"
                geometry={nodes.cattail_plant053_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant054"
              position={[-7.748, -0.744, -0.858]}
              rotation={[-0.005, -0.06, -0.094]}
            >
              <mesh
                name="cattail_plant054_0"
                geometry={nodes.cattail_plant054_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant055"
              position={[-7.37, -1.958, -0.828]}
              rotation={[0.098, 0.051, 0.8]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant055_0"
                geometry={nodes.cattail_plant055_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant056"
              position={[-7.112, -2.419, -0.647]}
              rotation={[0.085, 0.189, 3.13]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant056_0"
                geometry={nodes.cattail_plant056_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant057"
              position={[-7.409, -2.821, -0.853]}
              rotation={[0.232, -0.065, 0.417]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant057_0"
                geometry={nodes.cattail_plant057_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant058"
              position={[-7.81, -2.399, -0.799]}
              rotation={[0.069, -0.004, 0.514]}
              scale={0.979}
            >
              <mesh
                name="cattail_plant058_0"
                geometry={nodes.cattail_plant058_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant059"
              position={[-7.896, -3.377, -0.655]}
              rotation={[-0.035, -0.088, 0.511]}
              scale={0.972}
            >
              <mesh
                name="cattail_plant059_0"
                geometry={nodes.cattail_plant059_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant060"
              position={[-7.674, -2.79, -0.655]}
              rotation={[0.09, 0.067, 0.532]}
              scale={0.708}
            >
              <mesh
                name="cattail_plant060_0"
                geometry={nodes.cattail_plant060_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cattail_plant061"
              position={[-7.359, -3.098, -0.714]}
              rotation={[0.284, 0.017, 0.439]}
              scale={0.9}
            >
              <mesh
                name="cattail_plant061_0"
                geometry={nodes.cattail_plant061_0.geometry}
                material={materials.cattail_plant_mat}
              />
            </group>
            <group
              name="cauldron"
              position={[-1.606, 1.119, -0.322]}
              rotation={[-0.018, 0.005, 0.003]}
              scale={0.998}
            />
            <group
              name="chimney"
              position={[4.314, -3.347, 6.042]}
              rotation={[0, 0, -0.005]}
              scale={1.988}
            >
              <mesh
                name="chimney_0"
                geometry={nodes.chimney_0.geometry}
                material={materials.chimney_mat}
              />
            </group>
            <group
              name="Cube000"
              position={[-2.308, -6.849, 3.325]}
              rotation={[0.793, -0.128, -0.093]}
              scale={[0.063, 0.399, 0.391]}
            />
            <group
              name="Cube001"
              position={[-2.277, -6.428, 3.687]}
              rotation={[0.004, 0.005, -0.129]}
              scale={[0.132, 0.689, 0.636]}
            />
            <group
              name="Cube002"
              position={[1.547, -2.073, 5.04]}
              rotation={[0, -0.091, -0.005]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cube003"
              position={[1.482, -1.994, 5.682]}
              rotation={[0, -0.091, -0.005]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube003_0"
                geometry={nodes.Cube003_0.geometry}
                material={materials.wood_2_mat}
              />
            </group>
            <group
              name="Cube004"
              position={[1.601, -1.995, 4.383]}
              rotation={[0, -0.091, -0.005]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube004_0"
                geometry={nodes.Cube004_0.geometry}
                material={materials.wood_2_mat}
              />
            </group>
            <group
              name="Cube005"
              position={[1.535, -2.581, 5.031]}
              rotation={[-0.001, -0.091, -1.021]}
              scale={0.321}
            >
              <mesh
                name="Cube005_0"
                geometry={nodes.Cube005_0.geometry}
                material={materials.shutters_mat}
              />
            </group>
            <group
              name="Cube006"
              position={[1.54, -1.604, 5.031]}
              rotation={[3.141, 0.091, 2.352]}
              scale={-0.321}
            >
              <mesh
                name="Cube006_0"
                geometry={nodes.Cube006_0.geometry}
                material={materials.shutters_mat}
              />
            </group>
            <group
              name="Cube007"
              position={[3.207, -0.9, 3.607]}
              rotation={[1.551, -0.216, 1.567]}
              scale={[0.156, 1.337, 0.885]}
            >
              <mesh
                name="Cube007_0"
                geometry={nodes.Cube007_0.geometry}
                material={materials.wood_2_mat}
              />
            </group>
            <group
              name="Cube008"
              position={[-2.37, -7.27, 2.13]}
              rotation={[Math.PI / 2, -0.133, 0]}
              scale={[0.089, 1.312, 0.506]}
            />
            <group
              name="Cube009"
              position={[3.194, -3.306, 3.607]}
              rotation={[1.551, 0.103, 1.573]}
              scale={[0.156, 1.337, 0.885]}
            >
              <mesh
                name="Cube009_0"
                geometry={nodes.Cube009_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cube010"
              position={[2.575, -1.786, 3.637]}
              rotation={[-0.665, -1.544, -0.663]}
              scale={[0.116, 1.382, 0.915]}
            >
              <mesh
                name="Cube010_0"
                geometry={nodes.Cube010_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cube011"
              position={[4.275, -2.278, 3.66]}
              rotation={[0.752, 1.545, 2.391]}
              scale={[0.112, 1.39, 0.885]}
            >
              <mesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cube016"
              position={[3.411, -0.358, 5.699]}
              rotation={[0, 0, -0.005]}
              scale={1.65}
            >
              <mesh
                name="Cube016_0"
                geometry={nodes.Cube016_0.geometry}
                material={materials.roof_material}
              />
            </group>
            <group
              name="Cube020"
              position={[5.277, -2.524, 4.957]}
              rotation={[-3.141, -0.091, -0.79]}
              scale={-0.321}
            >
              <mesh
                name="Cube020_0"
                geometry={nodes.Cube020_0.geometry}
                material={materials.shutters_mat}
              />
            </group>
            <group
              name="Cube021"
              position={[5.282, -1.547, 4.957]}
              rotation={[0.001, 0.091, 2.121]}
              scale={0.321}
            >
              <mesh
                name="Cube021_0"
                geometry={nodes.Cube021_0.geometry}
                material={materials.shutters_mat}
              />
            </group>
            <group
              name="Cube022"
              position={[5.216, -2.133, 4.309]}
              rotation={[0, 0.091, 3.136]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube022_0"
                geometry={nodes.Cube022_0.geometry}
                material={materials.wood_2_mat}
              />
            </group>
            <group
              name="Cube023"
              position={[5.335, -2.134, 5.608]}
              rotation={[0, 0.091, 3.136]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube023_0"
                geometry={nodes.Cube023_0.geometry}
                material={materials.wood_2_mat}
              />
            </group>
            <group
              name="Cube024"
              position={[5.27, -2.055, 4.966]}
              rotation={[0, 0.091, 3.136]}
              scale={[0.114, 0.506, 0.647]}
            >
              <mesh
                name="Cube024_0"
                geometry={nodes.Cube024_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cube077"
              position={[3.797, 4.867, -0.033]}
              rotation={[0.292, 0.1, 0.487]}
              scale={1.082}
            >
              <mesh
                name="Cube077_0"
                geometry={nodes.Cube077_0.geometry}
                material={materials.Root}
              />
            </group>
            <group
              name="Cube083"
              position={[5.151, 0.357, 0.142]}
              rotation={[-0.146, -0.294, -1.94]}
              scale={3.354}
            >
              <mesh
                name="Cube083_0"
                geometry={nodes.Cube083_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="Cube088"
              position={[-0.444, -1.436, 0.045]}
              rotation={[-0.065, -0.025, -0.646]}
              scale={1.156}
            >
              <mesh
                name="Cube088_0"
                geometry={nodes.Cube088_0.geometry}
                material={materials.stool_mat}
              />
            </group>
            <group
              name="Cube241"
              position={[2.294, -2.127, 4.372]}
              rotation={[0, 0, 0.278]}
              scale={0.116}
            >
              <mesh
                name="Cube241_0"
                geometry={nodes.Cube241_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cylinder000"
              position={[1.662, -3.458, 5.46]}
              rotation={[0.794, 0.126, 1.874]}
              scale={[1.65, 1.303, 1.65]}
            >
              <mesh
                name="Cylinder000_0"
                geometry={nodes.Cylinder000_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder001"
              position={[1.635, -0.562, 5.506]}
              rotation={[-2.536, 0.307, 1.644]}
              scale={[2.044, 1.302, 2.044]}
            >
              <mesh
                name="Cylinder001_0"
                geometry={nodes.Cylinder001_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder002"
              position={[1.479, -1.464, 6.005]}
              rotation={[-0.139, 0.026, 1.391]}
              scale={[2.044, 1.879, 2.044]}
            >
              <mesh
                name="Cylinder002_0"
                geometry={nodes.Cylinder002_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder003"
              position={[-10.03, 14.853, 2.264]}
              rotation={[0.421, 0.121, 1.299]}
              scale={2.568}
            >
              <mesh
                name="Cylinder003_0"
                geometry={nodes.Cylinder003_0.geometry}
                material={materials.wood_3_mat}
              />
            </group>
            <group
              name="Cylinder004"
              position={[1.386, -2.097, 6.291]}
              rotation={[-0.161, 0.093, 1.536]}
              scale={[2.251, 2.194, 2.251]}
            >
              <mesh
                name="Cylinder004_0"
                geometry={nodes.Cylinder004_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder005"
              position={[-5.633, 19.251, 1.252]}
              rotation={[0.254, -0.169, -2.567]}
              scale={[1.828, 1.83, 1.494]}
            >
              <mesh
                name="Cylinder005_0"
                geometry={nodes.Cylinder005_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Cylinder006"
              position={[1.52, -2.718, 5.894]}
              rotation={[-1.402, -0.219, 1.597]}
              scale={[1.65, 1.782, 1.65]}
            >
              <mesh
                name="Cylinder006_0"
                geometry={nodes.Cylinder006_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder007"
              position={[5.174, -1.317, 5.781]}
              rotation={[1.402, 0.219, -1.544]}
              scale={[1.65, 1.782, 1.65]}
            >
              <mesh
                name="Cylinder007_0"
                geometry={nodes.Cylinder007_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder008"
              position={[2.754, -0.032, 5.968]}
              rotation={[-0.925, 1.295, 0.933]}
              scale={[1.65, 1.782, 1.65]}
            >
              <mesh
                name="Cylinder008_0"
                geometry={nodes.Cylinder008_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder009"
              position={[5.307, -1.939, 6.334]}
              rotation={[0.161, -0.093, -1.606]}
              scale={[2.251, 2.194, 2.251]}
            >
              <mesh
                name="Cylinder009_0"
                geometry={nodes.Cylinder009_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder010"
              position={[-1.479, 1.004, -0.457]}
              rotation={[0.981, -0.389, 1.135]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder010_0"
                geometry={nodes.Cylinder010_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder011"
              position={[5.215, -2.571, 6.076]}
              rotation={[0.139, -0.026, -1.751]}
              scale={[2.044, 1.879, 2.044]}
            >
              <mesh
                name="Cylinder011_0"
                geometry={nodes.Cylinder011_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder012"
              position={[5.059, -3.474, 5.477]}
              rotation={[2.536, -0.307, -1.498]}
              scale={[2.044, 1.302, 2.044]}
            >
              <mesh
                name="Cylinder012_0"
                geometry={nodes.Cylinder012_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder013"
              position={[5.032, -0.578, 5.462]}
              rotation={[-0.794, -0.126, -1.267]}
              scale={[1.65, 1.303, 1.65]}
            >
              <mesh
                name="Cylinder013_0"
                geometry={nodes.Cylinder013_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder014"
              position={[3.35, -0.257, 8.052]}
              rotation={[0.201, -0.016, -0.014]}
              scale={[1.573, 1.384, 1.391]}
            >
              <mesh
                name="Cylinder014_0"
                geometry={nodes.Cylinder014_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder015"
              position={[2.991, 13.302, -0.584]}
              rotation={[0.056, -0.178, 1.139]}
              scale={1.752}
            >
              <mesh
                name="Cylinder015_0"
                geometry={nodes.Cylinder015_0.geometry}
                material={materials.wood_3_mat}
              />
            </group>
            <group
              name="Cylinder016"
              position={[4.782, -3.798, 5.491]}
              rotation={[-0.179, 0.786, -2.711]}
              scale={[1.65, 1.303, 1.65]}
            >
              <mesh
                name="Cylinder016_0"
                geometry={nodes.Cylinder016_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder018"
              position={[1.989, -3.825, 5.504]}
              rotation={[-2.773, -0.574, 0.28]}
              scale={[2.044, 1.302, 2.044]}
            >
              <mesh
                name="Cylinder018_0"
                geometry={nodes.Cylinder018_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder019"
              position={[2.788, -3.981, 6.023]}
              rotation={[-0.026, -0.139, 2.958]}
              scale={[2.044, 1.879, 2.044]}
            >
              <mesh
                name="Cylinder019_0"
                geometry={nodes.Cylinder019_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder020"
              position={[3.421, -4.074, 6.415]}
              rotation={[-0.094, -0.16, 3.092]}
              scale={[2.251, 2.194, 2.251]}
            >
              <mesh
                name="Cylinder020_0"
                geometry={nodes.Cylinder020_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder021"
              position={[4.042, -4.012, 5.968]}
              rotation={[0.925, -1.295, -2.208]}
              scale={[1.65, 1.782, 1.65]}
            >
              <mesh
                name="Cylinder021_0"
                geometry={nodes.Cylinder021_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder022"
              position={[3.725, -0.09, 7.773]}
              rotation={[0.262, 0.25, -0.36]}
              scale={[1.573, 1.153, 1.391]}
            >
              <mesh
                name="Cylinder022_0"
                geometry={nodes.Cylinder022_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder023"
              position={[2.975, -0.128, 7.755]}
              rotation={[0.153, -0.009, 0.289]}
              scale={[1.573, 1.186, 1.391]}
            >
              <mesh
                name="Cylinder023_0"
                geometry={nodes.Cylinder023_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder025"
              position={[0.999, -2.376, 7.317]}
              rotation={[0.009, 0.273, 1.858]}
              scale={[1.412, 1.065, 1.249]}
            >
              <mesh
                name="Cylinder025_0"
                geometry={nodes.Cylinder025_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder026"
              position={[-2.233, -5.998, 3.485]}
              rotation={[0, 0, -0.133]}
              scale={[1.372, 1.238, 1.238]}
            />
            <group
              name="Cylinder027"
              position={[0.966, -1.702, 7.336]}
              rotation={[-0.268, 0.369, 1.31]}
              scale={[1.412, 1.036, 1.249]}
            >
              <mesh
                name="Cylinder027_0"
                geometry={nodes.Cylinder027_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder029"
              position={[-1.541, 1.233, -0.473]}
              rotation={[-0.103, 0.953, 2.989]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder029_0"
                geometry={nodes.Cylinder029_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder030"
              position={[-1.509, 1.123, -0.421]}
              rotation={[1, 0.44, 1.67]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder030_0"
                geometry={nodes.Cylinder030_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder031"
              position={[-1.63, 1.218, -0.479]}
              rotation={[-0.887, 0.685, -2.355]}
              scale={[1.341, 1.059, 1.341]}
            />
            <group
              name="Cylinder032"
              position={[1.145, -2.039, 7.567]}
              rotation={[0.017, 0.321, 1.552]}
              scale={[1.412, 1.243, 1.249]}
            >
              <mesh
                name="Cylinder032_0"
                geometry={nodes.Cylinder032_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder033"
              position={[-1.708, 1.203, -0.478]}
              rotation={[-1.024, 0.048, -1.873]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder033_0"
                geometry={nodes.Cylinder033_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder037"
              position={[-1.608, 0.987, -0.494]}
              rotation={[0.34, -1.045, 0.123]}
              scale={[1.341, 1.059, 1.341]}
            >
              <mesh
                name="Cylinder037_0"
                geometry={nodes.Cylinder037_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder049"
              position={[3.376, 0.03, 6.415]}
              rotation={[0.094, 0.16, -0.05]}
              scale={[2.251, 2.194, 2.251]}
            >
              <mesh
                name="Cylinder049_0"
                geometry={nodes.Cylinder049_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder050"
              position={[4.009, -0.063, 6.023]}
              rotation={[0.026, 0.139, -0.184]}
              scale={[2.044, 1.879, 2.044]}
            >
              <mesh
                name="Cylinder050_0"
                geometry={nodes.Cylinder050_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder051"
              position={[4.808, -0.219, 5.504]}
              rotation={[2.773, 0.574, -2.862]}
              scale={[2.044, 1.302, 2.044]}
            >
              <mesh
                name="Cylinder051_0"
                geometry={nodes.Cylinder051_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder053"
              position={[2.015, -0.246, 5.491]}
              rotation={[0.179, -0.786, 0.431]}
              scale={[1.65, 1.303, 1.65]}
            >
              <mesh
                name="Cylinder053_0"
                geometry={nodes.Cylinder053_0.geometry}
                material={materials.wood_1_mat}
              />
            </group>
            <group
              name="Cylinder108"
              position={[0.994, 4.465, -0.216]}
              rotation={[0, 0, -0.029]}
              scale={1.929}
            >
              <mesh
                name="Cylinder108_0"
                geometry={nodes.Cylinder108_0.geometry}
                material={materials.well_material}
              />
            </group>
            <group
              name="Cylinder109"
              position={[0.984, 4.495, 1.25]}
              rotation={[-Math.PI / 2, 1.229, Math.PI / 2]}
              scale={[1.038, 1.037, 1.037]}
            >
              <mesh
                name="Cylinder109_0"
                geometry={nodes.Cylinder109_0.geometry}
                material={materials.pulley_mat}
              />
            </group>
            <group
              name="Cylinder132"
              position={[-2.8, -9.988, 0.959]}
              rotation={[-0.404, -0.11, 2.13]}
              scale={2.318}
            >
              <mesh
                name="Cylinder132_0"
                geometry={nodes.Cylinder132_0.geometry}
                material={materials.wood_3_mat}
              />
            </group>
            <group
              name="fence_1"
              position={[2.576, -4.562, 0.543]}
              rotation={[-1.543, 0.656, 1.563]}
            >
              <mesh
                name="fence_1_0"
                geometry={nodes.fence_1_0.geometry}
                material={materials.fence_1_mat}
              />
            </group>
            <group
              name="fence_1001"
              position={[1.253, -5.608, 0.554]}
              rotation={[-1.604, 1.069, 1.612]}
            >
              <mesh
                name="fence_1001_0"
                geometry={nodes.fence_1001_0.geometry}
                material={materials.fence_1_mat}
              />
            </group>
            <group
              name="fence_1002"
              position={[5.368, -2.089, 0.505]}
              rotation={[-1.65, 0.591, 1.613]}
            >
              <mesh
                name="fence_1002_0"
                geometry={nodes.fence_1002_0.geometry}
                material={materials.fence_1_mat}
              />
            </group>
            <group
              name="fence_1003"
              position={[0.896, 6.192, -0.242]}
              rotation={[-1.564, -1.167, 1.708]}
            >
              <mesh
                name="fence_1003_0"
                geometry={nodes.fence_1003_0.geometry}
                material={materials.fence_1_mat}
              />
            </group>
            <group
              name="fence_2"
              position={[6.052, -0.543, 0.292]}
              rotation={[-1.535, -0.005, 1.564]}
            >
              <mesh
                name="fence_2_0"
                geometry={nodes.fence_2_0.geometry}
                material={materials.fence_2_mat}
              />
            </group>
            <group
              name="fire"
              position={[-3.494, -6.245, 1.506]}
              scale={[0.556, 0.556, 0.929]}
            >
              <mesh
                name="fire_0"
                geometry={nodes.fire_0.geometry}
                material={materials.fire_mat}
                morphTargetDictionary={nodes.fire_0.morphTargetDictionary}
                morphTargetInfluences={nodes.fire_0.morphTargetInfluences}
              />
            </group>
            <group
              name="fish"
              position={[-2.588, 5.065, 0.046]}
              rotation={[-1.281, -0.4, 0.092]}
            />
            <group
              name="fish001"
              position={[-2.64, 5.199, -0.08]}
              rotation={[-1.042, -0.765, -2.491]}
            />
            <group
              name="fishing_rod"
              position={[-2.217, 5.438, -0.257]}
              rotation={[-0.779, -0.045, 0.16]}
            >
              <mesh
                name="fishing_rod_0"
                geometry={nodes.fishing_rod_0.geometry}
                material={materials.fishing_rod_mat}
              />
            </group>
            <group
              name="fishing_rod_hook"
              position={[-2.357, 6.886, 1.127]}
              rotation={[0.021, 0.024, 0.396]}
            >
              <mesh
                name="fishing_rod_hook_0"
                geometry={nodes.fishing_rod_hook_0.geometry}
                material={materials.fishing_rod_mat}
              />
            </group>
            <group
              name="fog"
              position={[-11.313, -2.915, 1.054]}
              rotation={[-0.029, -0.006, -0.324]}
              scale={[1.597, 1.597, 1.001]}
            >
              <mesh
                name="fog_0"
                geometry={nodes.fog_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="fog_background"
              position={[-5.732, 6.007, 1.781]}
              scale={[22.679, 22.679, 3.228]}
            >
              <mesh
                name="fog_background_0"
                geometry={nodes.fog_background_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="garlic"
              position={[3.856, -2.739, 5.334]}
              rotation={[-0.006, -0.001, 0.407]}
              scale={0.1}
            >
              <mesh
                name="garlic_0"
                geometry={nodes.garlic_0.geometry}
                material={materials.garlic_mat}
              />
            </group>
            <group
              name="grass_1"
              position={[-3.294, 1.359, -0.135]}
              rotation={[-0.14, 0.187, 1.425]}
              scale={[1.159, 1.159, 0.95]}
            >
              <mesh
                name="grass_1_0"
                geometry={nodes.grass_1_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1001"
              position={[2.584, 5.002, -0.039]}
              rotation={[0.165, -0.015, 0.852]}
              scale={[1.5, 1.5, 1.147]}
            >
              <mesh
                name="grass_1001_0"
                geometry={nodes.grass_1001_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1002"
              position={[1.666, 7.141, -0.186]}
              rotation={[-0.056, 0.033, 0.851]}
              scale={[1.5, 1.5, 1.147]}
            >
              <mesh
                name="grass_1002_0"
                geometry={nodes.grass_1002_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1003"
              position={[2.55, 7.75, -0.157]}
              rotation={[0.031, -0.111, -1.019]}
              scale={[2.026, 2.026, 1.548]}
            >
              <mesh
                name="grass_1003_0"
                geometry={nodes.grass_1003_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1004"
              position={[4.875, 3.454, 0.919]}
              rotation={[-0.059, -0.199, 0.902]}
              scale={[1.974, 1.974, 1.509]}
            >
              <mesh
                name="grass_1004_0"
                geometry={nodes.grass_1004_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1005"
              position={[2.972, 2.495, 0.025]}
              rotation={[0.155, -0.059, 0.579]}
              scale={[1.5, 1.5, 1.147]}
            >
              <mesh
                name="grass_1005_0"
                geometry={nodes.grass_1005_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1006"
              position={[0.561, -0.06, 0.045]}
              rotation={[0.185, -0.061, 0.248]}
              scale={[1.285, 1.285, 1.053]}
            >
              <mesh
                name="grass_1006_0"
                geometry={nodes.grass_1006_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1007"
              position={[3.574, -4.156, 0.648]}
              rotation={[-0.126, -0.166, -1.154]}
              scale={[1.89, 1.89, 1.55]}
            >
              <mesh
                name="grass_1007_0"
                geometry={nodes.grass_1007_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1008"
              position={[2.936, -1.205, 0.246]}
              rotation={[-0.104, -0.112, -0.662]}
              scale={[1.575, 1.575, 1.291]}
            >
              <mesh
                name="grass_1008_0"
                geometry={nodes.grass_1008_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1009"
              position={[-3.522, -0.589, -0.098]}
              rotation={[0.037, 0.1, 1.943]}
              scale={[1.504, 1.504, 1.233]}
            >
              <mesh
                name="grass_1009_0"
                geometry={nodes.grass_1009_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1010"
              position={[1.495, 10.568, -0.157]}
              rotation={[-0.005, -0.215, -1.006]}
              scale={[2.026, 2.026, 1.548]}
            >
              <mesh
                name="grass_1010_0"
                geometry={nodes.grass_1010_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1011"
              position={[-5.909, -1.123, -0.16]}
              rotation={[-0.044, -0.056, 2.596]}
              scale={[1.504, 1.504, 1.233]}
            >
              <mesh
                name="grass_1011_0"
                geometry={nodes.grass_1011_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1012"
              position={[4.897, -1.22, 0.246]}
              rotation={[-0.529, -0.152, 0.647]}
              scale={[1.743, 1.743, 1.429]}
            >
              <mesh
                name="grass_1012_0"
                geometry={nodes.grass_1012_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1013"
              position={[0.864, 4.713, -0.099]}
              rotation={[0.062, -0.042, 1.446]}
              scale={[0.825, 0.815, 0.852]}
            >
              <mesh
                name="grass_1013_0"
                geometry={nodes.grass_1013_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_1014"
              position={[2.531, 4.172, -0.072]}
              rotation={[0.135, 0.096, 1.553]}
              scale={[1.5, 1.5, 1.147]}
            >
              <mesh
                name="grass_1014_0"
                geometry={nodes.grass_1014_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2"
              position={[1.317, 6.713, -0.165]}
              rotation={[0, 0, 0.345]}
            >
              <mesh
                name="grass_2_0"
                geometry={nodes.grass_2_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2001"
              position={[-0.651, 7.422, -0.463]}
              rotation={[-0.077, -0.103, 0.999]}
              scale={[1, 1, 1.26]}
            >
              <mesh
                name="grass_2001_0"
                geometry={nodes.grass_2001_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2002"
              position={[-0.63, 2.687, -0.091]}
              rotation={[0, 0, 0.104]}
              scale={[1, 1, 0.874]}
            >
              <mesh
                name="grass_2002_0"
                geometry={nodes.grass_2002_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2003"
              position={[-3.837, 5.353, -0.324]}
              rotation={[-0.158, 0.113, -0.61]}
              scale={[1, 1, 1.304]}
            >
              <mesh
                name="grass_2003_0"
                geometry={nodes.grass_2003_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2004"
              position={[-4.687, 5.251, -0.38]}
              rotation={[0.023, -0.021, -0.826]}
              scale={[1, 1, 1.304]}
            >
              <mesh
                name="grass_2004_0"
                geometry={nodes.grass_2004_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2005"
              position={[-5.034, 5.89, -0.42]}
              rotation={[0.032, -0.109, -0.859]}
              scale={[1, 1, 1.304]}
            >
              <mesh
                name="grass_2005_0"
                geometry={nodes.grass_2005_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2006"
              position={[-6.247, 3.358, -0.485]}
              rotation={[0.052, -0.216, -0.895]}
              scale={[1, 1, 1.304]}
            >
              <mesh
                name="grass_2006_0"
                geometry={nodes.grass_2006_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2007"
              position={[-5.926, 2.827, -0.438]}
              rotation={[-0.107, -0.121, 0.014]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2007_0"
                geometry={nodes.grass_2007_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2008"
              position={[-5.745, 2.04, -0.434]}
              rotation={[-0.109, -0.101, -1.119]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2008_0"
                geometry={nodes.grass_2008_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2009"
              position={[-6.783, 1.415, -0.615]}
              rotation={[-0.035, -0.144, -0.535]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2009_0"
                geometry={nodes.grass_2009_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2010"
              position={[-6.772, -0.84, -0.491]}
              rotation={[-0.143, -0.157, -1.737]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2010_0"
                geometry={nodes.grass_2010_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2011"
              position={[-5.037, -2.304, -0.123]}
              rotation={[-0.113, 0.027, -2.209]}
              scale={[1.142, 1.142, 1.169]}
            >
              <mesh
                name="grass_2011_0"
                geometry={nodes.grass_2011_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2012"
              position={[-3.489, -6.27, 0.301]}
              rotation={[-0.092, 0.078, -1.885]}
              scale={[0.862, 0.872, 1.099]}
            >
              <mesh
                name="grass_2012_0"
                geometry={nodes.grass_2012_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2013"
              position={[-2.148, -7.142, 0.216]}
              rotation={[-0.054, 0.108, -2.293]}
              scale={[0.956, 0.967, 1.218]}
            >
              <mesh
                name="grass_2013_0"
                geometry={nodes.grass_2013_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2014"
              position={[-2.406, -8.758, 1.42]}
              rotation={[-0.056, 0.233, -1.475]}
              scale={[1.593, 1.611, 1.197]}
            >
              <mesh
                name="grass_2014_0"
                geometry={nodes.grass_2014_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2015"
              position={[-3.299, -8.883, 1.601]}
              rotation={[-0.339, -0.094, -2.38]}
              scale={[1.372, 1.388, 1.223]}
            >
              <mesh
                name="grass_2015_0"
                geometry={nodes.grass_2015_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2016"
              position={[3.065, -8.188, 2.713]}
              rotation={[-0.17, -0.024, -0.548]}
              scale={[1.927, 1.949, 1.449]}
            >
              <mesh
                name="grass_2016_0"
                geometry={nodes.grass_2016_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2017"
              position={[2.968, -5.738, 2.103]}
              rotation={[-0.351, 0.049, -2.377]}
              scale={[1.211, 1.225, 1.544]}
            >
              <mesh
                name="grass_2017_0"
                geometry={nodes.grass_2017_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2018"
              position={[0.721, -5.286, 0.509]}
              rotation={[-0.114, -0.078, -0.171]}
              scale={[1.211, 1.225, 1.524]}
            >
              <mesh
                name="grass_2018_0"
                geometry={nodes.grass_2018_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2019"
              position={[3.841, 1.405, 0.107]}
              rotation={[0, 0, 0.509]}
            >
              <mesh
                name="grass_2019_0"
                geometry={nodes.grass_2019_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2020"
              position={[1.866, 2.94, -0.036]}
              rotation={[0.068, -0.029, 0.298]}
            >
              <mesh
                name="grass_2020_0"
                geometry={nodes.grass_2020_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2021"
              position={[-4.415, 3.252, -0.284]}
              rotation={[-0.144, 0, -0.416]}
              scale={[0.898, 0.898, 0.8]}
            >
              <mesh
                name="grass_2021_0"
                geometry={nodes.grass_2021_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2022"
              position={[-3.059, 1.446, -0.165]}
              rotation={[-0.066, -0.041, 0.073]}
              scale={[0.897, 0.897, 0.8]}
            >
              <mesh
                name="grass_2022_0"
                geometry={nodes.grass_2022_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2023"
              position={[-3.111, 5.869, -0.568]}
              rotation={[-0.065, -0.012, -0.505]}
              scale={[1, 1, 1.884]}
            >
              <mesh
                name="grass_2023_0"
                geometry={nodes.grass_2023_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2024"
              position={[0.504, 10.216, -0.577]}
              rotation={[0.017, -0.127, 1.779]}
              scale={[1.539, 1.539, 2.76]}
            >
              <mesh
                name="grass_2024_0"
                geometry={nodes.grass_2024_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2025"
              position={[-0.522, 10.287, -0.812]}
              rotation={[0.069, -0.087, 0.452]}
              scale={[1.539, 1.539, 2.43]}
            >
              <mesh
                name="grass_2025_0"
                geometry={nodes.grass_2025_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2026"
              position={[-1.216, 8.278, -0.812]}
              rotation={[0.069, -0.087, 0.452]}
              scale={[1.539, 1.539, 2.43]}
            >
              <mesh
                name="grass_2026_0"
                geometry={nodes.grass_2026_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2027"
              position={[-4.57, 6.419, -0.523]}
              rotation={[-0.101, 0.148, 1.107]}
              scale={[1.054, 1.037, 2.034]}
            >
              <mesh
                name="grass_2027_0"
                geometry={nodes.grass_2027_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2028"
              position={[-6.643, 4.158, -0.652]}
              rotation={[-0.085, -0.006, 1.895]}
              scale={[1.054, 1.037, 2.034]}
            >
              <mesh
                name="grass_2028_0"
                geometry={nodes.grass_2028_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2029"
              position={[-7.115, -2.574, -0.657]}
              rotation={[-0.072, -0.059, -0.903]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2029_0"
                geometry={nodes.grass_2029_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2030"
              position={[-9.839, -4.297, -0.383]}
              rotation={[-0.247, -0.089, -1.717]}
              scale={[1.142, 1.142, 1.489]}
            >
              <mesh
                name="grass_2030_0"
                geometry={nodes.grass_2030_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2031"
              position={[-0.294, -10.816, 2.869]}
              rotation={[-0.116, -0.256, -0.561]}
              scale={[1.927, 1.949, 1.449]}
            >
              <mesh
                name="grass_2031_0"
                geometry={nodes.grass_2031_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2032"
              position={[-5.183, -7.867, 1.544]}
              rotation={[-0.144, -0.28, -0.569]}
              scale={[1.927, 1.949, 1.449]}
            >
              <mesh
                name="grass_2032_0"
                geometry={nodes.grass_2032_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2033"
              position={[-3.981, -3.934, -0.016]}
              rotation={[-0.269, 0.034, -2.469]}
              scale={[1.307, 1.322, 0.983]}
            >
              <mesh
                name="grass_2033_0"
                geometry={nodes.grass_2033_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2034"
              position={[0.246, 11.29, -0.36]}
              rotation={[-0.087, -0.175, 0.938]}
              scale={[1.084, 1.084, 1.365]}
            >
              <mesh
                name="grass_2034_0"
                geometry={nodes.grass_2034_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2035"
              position={[-10.39, -5.465, -0.255]}
              rotation={[-0.334, -0.262, -2.289]}
              scale={[1.24, 1.24, 1.616]}
            >
              <mesh
                name="grass_2035_0"
                geometry={nodes.grass_2035_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2036"
              position={[4.67, -1.802, 0.398]}
              rotation={[-0.235, 0.022, 0.571]}
            >
              <mesh
                name="grass_2036_0"
                geometry={nodes.grass_2036_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2037"
              position={[6.14, 1.851, 1.314]}
              rotation={[0.137, -0.014, 0.311]}
              scale={1.276}
            >
              <mesh
                name="grass_2037_0"
                geometry={nodes.grass_2037_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2038"
              position={[6.314, -2.142, 0.411]}
              rotation={[-0.351, 0.049, -2.377]}
              scale={[1.211, 1.225, 1.544]}
            >
              <mesh
                name="grass_2038_0"
                geometry={nodes.grass_2038_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2039"
              position={[-8.81, -6.605, -0.236]}
              rotation={[-0.17, -0.388, -1.784]}
              scale={[1.683, 1.683, 2.194]}
            >
              <mesh
                name="grass_2039_0"
                geometry={nodes.grass_2039_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="grass_2040"
              position={[2.186, -2.515, 0.265]}
              rotation={[-0.047, -0.083, 0.478]}
            >
              <mesh
                name="grass_2040_0"
                geometry={nodes.grass_2040_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="ground"
              position={[-4.773, 5.178, -2.028]}
              rotation={[0, 0, -1.501]}
            />
            <group
              name="Hillhock"
              position={[-2.844, -9.197, -0.102]}
              rotation={[0, 0, -2.641]}
              scale={1.65}
            >
              <mesh
                name="Hillhock_0"
                geometry={nodes.Hillhock_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock001"
              position={[2.038, -10.979, 1.024]}
              rotation={[0.07, -0.16, -1.674]}
              scale={2.083}
            >
              <mesh
                name="Hillhock001_0"
                geometry={nodes.Hillhock001_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock002"
              position={[5.076, -5.772, -0.362]}
              rotation={[-0.31, 0.068, -1.271]}
              scale={2.083}
            >
              <mesh
                name="Hillhock002_0"
                geometry={nodes.Hillhock002_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock003"
              position={[7, -8.359, 2.039]}
              rotation={[-0.316, -0.031, -1.116]}
              scale={1.791}
            >
              <mesh
                name="Hillhock003_0"
                geometry={nodes.Hillhock003_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock004"
              position={[9.651, 3.014, 0.062]}
              rotation={[-0.139, -0.195, -0.113]}
              scale={2.111}
            >
              <mesh
                name="Hillhock004_0"
                geometry={nodes.Hillhock004_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock005"
              position={[5.292, 3.226, -0.437]}
              rotation={[-0.156, 0.032, 0.119]}
              scale={1.482}
            >
              <mesh
                name="Hillhock005_0"
                geometry={nodes.Hillhock005_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock006"
              position={[-17.32, 8.302, -1.207]}
              rotation={[-0.027, -0.036, 2.215]}
              scale={[2.69, 2.699, 2.133]}
            >
              <mesh
                name="Hillhock006_0"
                geometry={nodes.Hillhock006_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock007"
              position={[-13.06, 13.554, -1.356]}
              rotation={[0.001, -0.134, 1.666]}
              scale={[2.978, 3.007, 3.212]}
            >
              <mesh
                name="Hillhock007_0"
                geometry={nodes.Hillhock007_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock008"
              position={[-4.63, 20.367, -1.36]}
              rotation={[0.023, -0.071, 1.384]}
              scale={[2.978, 3.007, 3.212]}
            >
              <mesh
                name="Hillhock008_0"
                geometry={nodes.Hillhock008_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock009"
              position={[7.133, 10.867, -0.802]}
              rotation={[-0.089, 0.162, 0.901]}
              scale={[2.09, 2.09, 1.283]}
            >
              <mesh
                name="Hillhock009_0"
                geometry={nodes.Hillhock009_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock010"
              position={[-20.118, 0.446, -1.482]}
              rotation={[0.07, -0.079, 2.531]}
              scale={[2.69, 2.699, 2.133]}
            >
              <mesh
                name="Hillhock010_0"
                geometry={nodes.Hillhock010_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="Hillhock011"
              position={[-9.464, -9.223, -0.157]}
              rotation={[0.062, 0.043, -2.452]}
              scale={1.243}
            >
              <mesh
                name="Hillhock011_0"
                geometry={nodes.Hillhock011_0.geometry}
                material={materials.Hillhock_mat}
              />
            </group>
            <group
              name="hourglass"
              position={[2.36, -2.997, 5.067]}
              rotation={[0.012, 0.024, -0.002]}
            >
              <mesh
                name="hourglass_0"
                geometry={nodes.hourglass_0.geometry}
                material={materials.hourglas_mat}
              />
            </group>
            <group
              name="hourglass_glass"
              position={[2.36, -2.997, 5.067]}
              rotation={[0.012, 0.024, -0.002]}
            >
              <mesh
                name="hourglass_glass_0"
                geometry={nodes.hourglass_glass_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group
              name="hut_door"
              position={[4.013, -0.574, 4.669]}
              rotation={[-0.102, -0.021, 0.471]}
            >
              <mesh
                name="hut_door_0"
                geometry={nodes.hut_door_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="hut_door001"
              position={[4.013, -0.574, 4.669]}
              rotation={[-0.102, -0.021, 0.471]}
            >
              <mesh
                name="hut_door001_0"
                geometry={nodes.hut_door001_0.geometry}
                material={materials.Metal_1_mat}
              />
            </group>
            <group
              name="hut_floor"
              position={[3.173, -1.999, 3.758]}
              rotation={[0, 0, -0.005]}
              scale={1.65}
            >
              <mesh
                name="hut_floor_0"
                geometry={nodes.hut_floor_0.geometry}
                material={materials.hut_floor_mat}
              />
            </group>
            <group
              name="hut_roof"
              position={[3.402, -2.029, 5.162]}
              rotation={[0, 0, -0.005]}
              scale={[1.947, 1.947, 2.162]}
            >
              <mesh
                name="hut_roof_0"
                geometry={nodes.hut_roof_0.geometry}
                material={materials.roof_material}
              />
            </group>
            <group
              name="hut_roof_2"
              position={[3.366, -0.893, 8.382]}
              rotation={[0.455, -0.002, -0.005]}
              scale={1.65}
            >
              <mesh
                name="hut_roof_2_0"
                geometry={nodes.hut_roof_2_0.geometry}
                material={materials.roof_material}
              />
            </group>
            <group
              name="hut_roof_2001"
              position={[1.748, -2.025, 7.793]}
              rotation={[0.003, 0.575, 1.564]}
              scale={1.481}
            >
              <mesh
                name="hut_roof_2001_0"
                geometry={nodes.hut_roof_2001_0.geometry}
                material={materials.roof_material}
              />
            </group>
            <group
              name="hut_stand"
              position={[3.422, -2.132, 1.752]}
              rotation={[0, 0, -0.001]}
            >
              <mesh
                name="hut_stand_0"
                geometry={nodes.hut_stand_0.geometry}
                material={materials.hut_stand}
              />
            </group>
            <group
              name="hut_walls"
              position={[3.402, -2.029, 5.474]}
              rotation={[0, 0, -0.005]}
              scale={1.65}
            >
              <mesh
                name="hut_walls_0"
                geometry={nodes.hut_walls_0.geometry}
                material={materials.hut_walls_mat}
              />
            </group>
            <group
              name="hut_walls_small"
              position={[3.36, -0.255, 7.648]}
              rotation={[0, 0, -0.005]}
              scale={0.49}
            >
              <mesh
                name="hut_walls_small_0"
                geometry={nodes.hut_walls_small_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="hut_walls_small001"
              position={[1.1, -2.03, 7.208]}
              rotation={[0, 0.119, 1.565]}
              scale={0.44}
            >
              <mesh
                name="hut_walls_small001_0"
                geometry={nodes.hut_walls_small001_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="hut_window_small"
              position={[3.368, 0.234, 7.684]}
              rotation={[-1.748, 0.005, 0.135]}
              scale={1.919}
            >
              <mesh
                name="hut_window_small_0"
                geometry={nodes.hut_window_small_0.geometry}
                material={materials.hut_window_small_mat}
              />
            </group>
            <group
              name="hut_window_small001"
              position={[0.668, -2.023, 7.292]}
              rotation={[-3.048, -1.513, -1.343]}
              scale={1.723}
            >
              <mesh
                name="hut_window_small001_0"
                geometry={nodes.hut_window_small001_0.geometry}
                material={materials.hut_window_small_mat}
              />
            </group>
            <group name="jar" position={[2.883, -3.117, 5.1]}>
              <mesh
                name="jar_0"
                geometry={nodes.jar_0.geometry}
                material={materials.jar_mat}
              />
            </group>
            <group name="jar001" position={[2.487, -3.125, 4.597]}>
              <mesh
                name="jar001_0"
                geometry={nodes.jar001_0.geometry}
                material={materials.jar_mat}
              />
            </group>
            <group
              name="jar002"
              position={[-3.175, -2.003, 0.52]}
              rotation={[0, 0, 0.295]}
            >
              <mesh
                name="jar002_0"
                geometry={nodes.jar002_0.geometry}
                material={materials.jar_mat}
              />
            </group>
            <group name="jar003" position={[4.342, -1.006, 5.11]} scale={0.872}>
              <mesh
                name="jar003_0"
                geometry={nodes.jar003_0.geometry}
                material={materials.jar_mat}
              />
            </group>
            <group
              name="jar004"
              position={[4.483, -1.439, 5.096]}
              scale={[0.664, 0.664, 0.729]}
            >
              <mesh
                name="jar004_0"
                geometry={nodes.jar004_0.geometry}
                material={materials.jar_mat}
              />
            </group>
            <group name="jar_glass" position={[2.883, -3.117, 5.1]}>
              <mesh
                name="jar_glass_0"
                geometry={nodes.jar_glass_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group name="jar_glass001" position={[2.487, -3.125, 4.597]}>
              <mesh
                name="jar_glass001_0"
                geometry={nodes.jar_glass001_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group
              name="jar_glass002"
              position={[-3.175, -2.003, 0.52]}
              rotation={[0, 0, 0.295]}
            >
              <mesh
                name="jar_glass002_0"
                geometry={nodes.jar_glass002_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group
              name="jar_glass003"
              position={[4.342, -1.006, 5.11]}
              scale={0.872}
            >
              <mesh
                name="jar_glass003_0"
                geometry={nodes.jar_glass003_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group
              name="jar_glass004"
              position={[4.483, -1.439, 5.096]}
              scale={[0.664, 0.664, 0.729]}
            >
              <mesh
                name="jar_glass004_0"
                geometry={nodes.jar_glass004_0.geometry}
                material={materials.glass_mat}
              />
            </group>
            <group
              name="ladder_1"
              position={[3.804, 1.294, 0.041]}
              rotation={[0.325, -0.04, -0.118]}
            >
              <mesh
                name="ladder_1_0"
                geometry={nodes.ladder_1_0.geometry}
                material={materials.ladder_mat}
              />
            </group>
            <group
              name="ladder_1001"
              position={[2.547, -1.049, 3.832]}
              rotation={[0.358, -0.073, -0.196]}
              scale={0.765}
            >
              <mesh
                name="ladder_1001_0"
                geometry={nodes.ladder_1001_0.geometry}
                material={materials.ladder_mat}
              />
            </group>
            <group
              name="leafs"
              position={[-0.436, 5.101, 0.019]}
              rotation={[0, -0.026, -0.989]}
            >
              <mesh
                name="leafs_0"
                geometry={nodes.leafs_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group
              name="mushroom_1"
              position={[-3.25, -1.823, 0.413]}
              rotation={[0.849, -1.195, 0.207]}
            >
              <mesh
                name="mushroom_1_0"
                geometry={nodes.mushroom_1_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1001"
              position={[0.971, 0.206, 0.05]}
              rotation={[-0.122, 0.076, -2.17]}
              scale={[1.341, 1.341, 1.463]}
            >
              <mesh
                name="mushroom_1001_0"
                geometry={nodes.mushroom_1001_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1002"
              position={[2.748, 2.728, 0.015]}
              rotation={[-0.156, 0.009, -2.184]}
              scale={[1.243, 1.243, 1.356]}
            >
              <mesh
                name="mushroom_1002_0"
                geometry={nodes.mushroom_1002_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1003"
              position={[2.339, -3.624, 0.383]}
              rotation={[-0.113, -0.059, -2.127]}
              scale={[2.257, 2.257, 2.462]}
            >
              <mesh
                name="mushroom_1003_0"
                geometry={nodes.mushroom_1003_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1004"
              position={[5.822, 1.984, 1.327]}
              rotation={[-0.234, -0.116, -2.068]}
              scale={[1.701, 1.701, 1.856]}
            >
              <mesh
                name="mushroom_1004_0"
                geometry={nodes.mushroom_1004_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1005"
              position={[0.305, 7.288, -0.27]}
              rotation={[-0.036, -0.143, -0.614]}
              scale={[1.243, 1.243, 1.356]}
            >
              <mesh
                name="mushroom_1005_0"
                geometry={nodes.mushroom_1005_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_1006"
              position={[1.232, 7.329, -0.27]}
              rotation={[-0.068, -0.284, -0.571]}
              scale={[1.484, 1.484, 1.619]}
            >
              <mesh
                name="mushroom_1006_0"
                geometry={nodes.mushroom_1006_0.geometry}
                material={materials.mushroom_1_mat}
              />
            </group>
            <group
              name="mushroom_2"
              position={[-3.245, -2.269, 0.438]}
              rotation={[1.782, -1.043, 0.639]}
            >
              <mesh
                name="mushroom_2_0"
                geometry={nodes.mushroom_2_0.geometry}
                material={materials.mushroom_2_mat}
              />
            </group>
            <group
              name="mushroom_2001"
              position={[2.454, 2.678, 0.049]}
              rotation={[0.167, -0.167, -0.624]}
              scale={1.402}
            >
              <mesh
                name="mushroom_2001_0"
                geometry={nodes.mushroom_2001_0.geometry}
                material={materials.mushroom_2_mat}
              />
            </group>
            <group
              name="mushroom_2002"
              position={[1.291, -5.12, 0.533]}
              rotation={[-0.18, 0.112, -0.551]}
              scale={1.864}
            >
              <mesh
                name="mushroom_2002_0"
                geometry={nodes.mushroom_2002_0.geometry}
                material={materials.mushroom_2_mat}
              />
            </group>
            <group
              name="mushroom_2003"
              position={[1.101, -5.236, 0.529]}
              rotation={[0.008, -0.084, -0.019]}
              scale={1.311}
            >
              <mesh
                name="mushroom_2003_0"
                geometry={nodes.mushroom_2003_0.geometry}
                material={materials.mushroom_2_mat}
              />
            </group>
            <group
              name="mushroom_2004"
              position={[0.356, 6.995, -0.228]}
              rotation={[0.142, 0.178, 0.917]}
              scale={1.402}
            >
              <mesh
                name="mushroom_2004_0"
                geometry={nodes.mushroom_2004_0.geometry}
                material={materials.mushroom_2_mat}
              />
            </group>
            <group
              name="Plane"
              position={[5.333, 15.203, 2.802]}
              rotation={[0, 0, -2.089]}
              scale={1.65}
            >
              <mesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane001"
              position={[-12.999, -7.899, 2.817]}
              rotation={[-0.06, -0.077, 0.6]}
              scale={1.65}
            >
              <mesh
                name="Plane001_0"
                geometry={nodes.Plane001_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane002"
              position={[-17.952, 0.597, 4.156]}
              rotation={[0, 0, 0.262]}
              scale={2.426}
            >
              <mesh
                name="Plane002_0"
                geometry={nodes.Plane002_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane003"
              position={[-6.225, 13.717, 2.144]}
              rotation={[0, 0, -0.985]}
              scale={1.597}
            >
              <mesh
                name="Plane003_0"
                geometry={nodes.Plane003_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane004"
              position={[2.047, -1.697, 6.305]}
              scale={1.634}
            >
              <mesh
                name="Plane004_0"
                geometry={nodes.Plane004_0.geometry}
                material={materials.Metal_1_mat}
              />
            </group>
            <group
              name="Plane005"
              position={[-8.173, 7.189, 1.177]}
              rotation={[0, 0, -0.927]}
              scale={[1.597, 1.597, 1.108]}
            >
              <mesh
                name="Plane005_0"
                geometry={nodes.Plane005_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane006"
              position={[-5.66, 19.324, 5.326]}
              rotation={[0, 0, -1.317]}
              scale={2.479}
            >
              <mesh
                name="Plane006_0"
                geometry={nodes.Plane006_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane007"
              position={[8.201, -1.994, 4.089]}
              rotation={[-0.088, 0.03, 3.03]}
              scale={1.282}
            >
              <mesh
                name="Plane007_0"
                geometry={nodes.Plane007_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane008"
              position={[-1.48, -11.914, 4.338]}
              rotation={[0.003, -0.063, 1.581]}
              scale={1.151}
            >
              <mesh
                name="Plane008_0"
                geometry={nodes.Plane008_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane009"
              position={[9.551, -11.73, 6.631]}
              rotation={[0.024, -0.101, 2.448]}
              scale={2.002}
            >
              <mesh
                name="Plane009_0"
                geometry={nodes.Plane009_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane010"
              position={[9.104, 6.133, 4.089]}
              rotation={[-0.167, -0.107, -2.698]}
              scale={1.619}
            >
              <mesh
                name="Plane010_0"
                geometry={nodes.Plane010_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane011"
              position={[-19.458, 11.375, 4.385]}
              rotation={[0, 0, -0.474]}
              scale={[1.83, 1.83, 1.829]}
            >
              <mesh
                name="Plane011_0"
                geometry={nodes.Plane011_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane012"
              position={[14.312, 4.448, 5.416]}
              rotation={[-0.075, -0.002, -2.989]}
              scale={1.674}
            >
              <mesh
                name="Plane012_0"
                geometry={nodes.Plane012_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane013"
              position={[-3.883, 23.258, 16.116]}
              rotation={[0.136, -0.067, -1.589]}
              scale={[3.973, 3.033, 3.973]}
            >
              <mesh
                name="Plane013_0"
                geometry={nodes.Plane013_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane014"
              position={[8.447, -9.258, 17.876]}
              rotation={[0.009, -0.087, 2.468]}
              scale={3.311}
            >
              <mesh
                name="Plane014_0"
                geometry={nodes.Plane014_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane015"
              position={[-17.08, -10.45, 17.348]}
              rotation={[-0.145, -0.025, 0.813]}
              scale={[4.894, 4.394, 4.894]}
            >
              <mesh
                name="Plane015_0"
                geometry={nodes.Plane015_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane016"
              position={[-9.582, -9.1, 21.428]}
              rotation={[-0.512, 0.321, 1.071]}
              scale={3.055}
            >
              <mesh
                name="Plane016_0"
                geometry={nodes.Plane016_0.geometry}
                material={materials.Smoke_mat}
              />
            </group>
            <group
              name="Plane017"
              position={[3.352, -2.029, 5.826]}
              scale={1.433}
            >
              <mesh
                name="Plane017_0"
                geometry={nodes.Plane017_0.geometry}
                material={materials.roof_material}
              />
            </group>
            <group
              name="Plane018"
              position={[1.72, -1.829, 0.365]}
              rotation={[-0.034, -0.075, -0.003]}
            >
              <mesh
                name="Plane018_0"
                geometry={nodes.Plane018_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane019"
              position={[4.118, 0.358, 0.304]}
              rotation={[-0.039, -0.015, -0.966]}
            >
              <mesh
                name="Plane019_0"
                geometry={nodes.Plane019_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane020"
              position={[-2.763, 3.23, -0.028]}
              rotation={[-0.02, -0.06, 0.324]}
              scale={0.831}
            >
              <mesh
                name="Plane020_0"
                geometry={nodes.Plane020_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane021"
              position={[0.885, -4.009, 0.492]}
              rotation={[-0.095, 0, 0.222]}
              scale={0.831}
            >
              <mesh
                name="Plane021_0"
                geometry={nodes.Plane021_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane022"
              position={[-3.432, -4.685, 0.27]}
              rotation={[-0.12, -0.162, 0.242]}
              scale={0.831}
            >
              <mesh
                name="Plane022_0"
                geometry={nodes.Plane022_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane023"
              position={[-4.252, -0.747, 0.004]}
              rotation={[-0.045, -0.033, -0.337]}
              scale={0.831}
            >
              <mesh
                name="Plane023_0"
                geometry={nodes.Plane023_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane024"
              position={[0.617, -7.955, 0.867]}
              rotation={[-0.114, -0.172, -0.513]}
              scale={0.831}
            >
              <mesh
                name="Plane024_0"
                geometry={nodes.Plane024_0.geometry}
                material={materials.leafs_mat}
              />
            </group>
            <group
              name="Plane025"
              position={[1.192, 0.292, 0.201]}
              rotation={[-0.063, -0.062, 1.065]}
            >
              <mesh
                name="Plane025_0"
                geometry={nodes.Plane025_0.geometry}
                material={materials.autumn_yellow_mat}
              />
            </group>
            <group name="Point" position={[-1.526, 0.63, 0.93]} scale={1.65}>
              <group name="Point001" />
            </group>
            <group
              name="Point003"
              position={[3.507, -2.79, 5.322]}
              scale={1.786}
            >
              <group name="Point002" />
            </group>
            <group
              name="rat"
              position={[-3.048, -6.422, 0.514]}
              rotation={[0.075, -0.005, 0.007]}
            />
            <group
              name="rock_1"
              position={[-6.077, -5.799, 1.331]}
              rotation={[-0.106, -0.182, -1.894]}
              scale={13.679}
            >
              <mesh
                name="rock_1_0"
                geometry={nodes.rock_1_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1001"
              position={[-5.974, -3.713, 0.532]}
              rotation={[0.122, -0.078, 0.336]}
              scale={9.215}
            >
              <mesh
                name="rock_1001_0"
                geometry={nodes.rock_1001_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1002"
              position={[-6.496, -1.845, 0.043]}
              rotation={[-0.002, -0.309, -1.991]}
              scale={[5.724, 6.742, 4.786]}
            >
              <mesh
                name="rock_1002_0"
                geometry={nodes.rock_1002_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1003"
              position={[-8.441, -4.604, 0.488]}
              rotation={[-0.108, -0.265, -3.027]}
              scale={8.982}
            >
              <mesh
                name="rock_1003_0"
                geometry={nodes.rock_1003_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1004"
              position={[-5.356, 3.772, 0.151]}
              rotation={[0.112, -0.015, 0.226]}
              scale={6.919}
            >
              <mesh
                name="rock_1004_0"
                geometry={nodes.rock_1004_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1005"
              position={[-6.044, 4.896, -0.127]}
              rotation={[0.239, -0.087, 1.292]}
              scale={4.821}
            >
              <mesh
                name="rock_1005_0"
                geometry={nodes.rock_1005_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1006"
              position={[-7.009, 9.641, 0.283]}
              rotation={[0, 0.068, 2.727]}
              scale={[8.632, 9.65, 13.377]}
            >
              <mesh
                name="rock_1006_0"
                geometry={nodes.rock_1006_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1007"
              position={[-9.55, 4.347, 0.368]}
              rotation={[-0.048, 0.049, -1.278]}
              scale={[6.392, 7.55, 13.377]}
            >
              <mesh
                name="rock_1007_0"
                geometry={nodes.rock_1007_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1008"
              position={[-10.843, 3.012, -1.539]}
              rotation={[2.866, -1.039, 1.661]}
              scale={[6.217, 6.458, 12.793]}
            >
              <mesh
                name="rock_1008_0"
                geometry={nodes.rock_1008_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1009"
              position={[4.19, 5.44, 1.447]}
              rotation={[-0.15, -0.393, -1.703]}
              scale={12.705}
            >
              <mesh
                name="rock_1009_0"
                geometry={nodes.rock_1009_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1010"
              position={[3.129, 6.334, 0.86]}
              rotation={[-0.131, 0.11, 1.619]}
              scale={9.331}
            >
              <mesh
                name="rock_1010_0"
                geometry={nodes.rock_1010_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1011"
              position={[9.483, -2.677, 2.987]}
              rotation={[-0.151, -0.113, 0.506]}
              scale={16.548}
            >
              <mesh
                name="rock_1011_0"
                geometry={nodes.rock_1011_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1012"
              position={[7.415, -6.098, 2.554]}
              rotation={[0.073, 0.542, 2.657]}
              scale={12.964}
            >
              <mesh
                name="rock_1012_0"
                geometry={nodes.rock_1012_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1013"
              position={[1.431, 8.91, 0.465]}
              rotation={[-0.032, 0.01, 0.035]}
              scale={[9.331, 9.331, 9.171]}
            >
              <mesh
                name="rock_1013_0"
                geometry={nodes.rock_1013_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_1014"
              position={[-0.127, 9.346, -0.07]}
              rotation={[-0.512, -0.248, -2.756]}
              scale={[5.787, 7.047, 6.887]}
            >
              <mesh
                name="rock_1014_0"
                geometry={nodes.rock_1014_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_2"
              position={[-2.304, 1.927, -0.136]}
              rotation={[0.122, 0.283, 1.323]}
            >
              <mesh
                name="rock_2_0"
                geometry={nodes.rock_2_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2001"
              position={[1.443, 2.71, -0.018]}
              rotation={[0.269, -0.289, -0.368]}
              scale={1.322}
            >
              <mesh
                name="rock_2001_0"
                geometry={nodes.rock_2001_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2002"
              position={[-0.389, 5.914, -0.211]}
              rotation={[-0.368, 0.108, 1.797]}
              scale={2.117}
            >
              <mesh
                name="rock_2002_0"
                geometry={nodes.rock_2002_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2003"
              position={[-0.559, 2.226, -0.033]}
              rotation={[0.169, 0.037, 1.075]}
              scale={0.926}
            >
              <mesh
                name="rock_2003_0"
                geometry={nodes.rock_2003_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2004"
              position={[-3.627, 1.28, -0.13]}
              rotation={[-0.012, 0.218, 1.045]}
              scale={0.601}
            >
              <mesh
                name="rock_2004_0"
                geometry={nodes.rock_2004_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2005"
              position={[-4.729, -1.752, -0.101]}
              rotation={[-0.136, 0.108, 1.036]}
              scale={0.95}
            >
              <mesh
                name="rock_2005_0"
                geometry={nodes.rock_2005_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2006"
              position={[1.972, -4.075, 0.402]}
              rotation={[-0.148, -0.088, -1.629]}
              scale={2.514}
            >
              <mesh
                name="rock_2006_0"
                geometry={nodes.rock_2006_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2007"
              position={[4.568, -3.598, 0.667]}
              rotation={[-0.185, -0.052, 2.132]}
              scale={3.855}
            >
              <mesh
                name="rock_2007_0"
                geometry={nodes.rock_2007_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2008"
              position={[-4.428, 4.404, -0.374]}
              rotation={[0.176, -0.219, -0.507]}
              scale={2.374}
            >
              <mesh
                name="rock_2008_0"
                geometry={nodes.rock_2008_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2009"
              position={[-5.86, -0.155, -0.219]}
              rotation={[-0.011, -0.008, 0.964]}
              scale={0.972}
            >
              <mesh
                name="rock_2009_0"
                geometry={nodes.rock_2009_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2010"
              position={[-5.949, 0.244, -0.258]}
              rotation={[-0.008, -0.507, -1.339]}
              scale={0.643}
            >
              <mesh
                name="rock_2010_0"
                geometry={nodes.rock_2010_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2011"
              position={[-5.102, 2.456, -0.254]}
              rotation={[-0.102, -0.327, -1.328]}
              scale={1.143}
            >
              <mesh
                name="rock_2011_0"
                geometry={nodes.rock_2011_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2012"
              position={[-1.955, 1.214, -0.05]}
              rotation={[-0.112, 0.187, 1.534]}
              scale={0.796}
            >
              <mesh
                name="rock_2012_0"
                geometry={nodes.rock_2012_0.geometry}
                material={materials.rock_2_mat}
                position={[0.606, 0.002, -0.427]}
              />
            </group>
            <group
              name="rock_2013"
              position={[-1.888, 0.533, -0.362]}
              rotation={[-0.134, -0.133, -2.972]}
              scale={0.929}
            >
              <mesh
                name="rock_2013_0"
                geometry={nodes.rock_2013_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2014"
              position={[-1.578, 0.45, -0.362]}
              rotation={[0.058, -0.18, -1.863]}
              scale={0.615}
            >
              <mesh
                name="rock_2014_0"
                geometry={nodes.rock_2014_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2015"
              position={[-0.952, 1.364, -0.389]}
              rotation={[-0.138, 0.284, 1.56]}
              scale={0.796}
            >
              <mesh
                name="rock_2015_0"
                geometry={nodes.rock_2015_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2016"
              position={[-1.104, 1.635, -0.404]}
              rotation={[0.276, 0.153, 0.022]}
              scale={0.641}
            >
              <mesh
                name="rock_2016_0"
                geometry={nodes.rock_2016_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2017"
              position={[-2.217, 5.614, -0.27]}
              rotation={[-0.059, 0.179, 0.857]}
              scale={0.796}
            >
              <mesh
                name="rock_2017_0"
                geometry={nodes.rock_2017_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2018"
              position={[0.726, 4.403, -0.045]}
              rotation={[0.128, 0.21, 0.439]}
              scale={1.227}
            >
              <mesh
                name="rock_2018_0"
                geometry={nodes.rock_2018_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2019"
              position={[0.971, 4.2, 0.048]}
              rotation={[-0.102, -0.327, -1.328]}
              scale={0.917}
            >
              <mesh
                name="rock_2019_0"
                geometry={nodes.rock_2019_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_2020"
              position={[1.185, 4.489, -0.047]}
              rotation={[0.016, -0.518, 2.843]}
              scale={[1.624, 1.624, 1.054]}
            >
              <mesh
                name="rock_2020_0"
                geometry={nodes.rock_2020_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_3"
              position={[4.204, -1.998, 3.844]}
              rotation={[0.057, 0.198, 1.521]}
              scale={0.407}
            >
              <mesh
                name="rock_3_0"
                geometry={nodes.rock_3_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_3001"
              position={[4.23, -2.239, 3.832]}
              rotation={[0.213, 0.224, 0.967]}
              scale={0.278}
            >
              <mesh
                name="rock_3001_0"
                geometry={nodes.rock_3001_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rock_3002"
              position={[3.343, -2.609, 3.836]}
              rotation={[-0.185, 0.09, 2.924]}
              scale={0.295}
            >
              <mesh
                name="rock_3002_0"
                geometry={nodes.rock_3002_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_3003"
              position={[2.758, -2.683, 3.811]}
              rotation={[-0.146, 0.16, 2.928]}
              scale={0.317}
            >
              <mesh
                name="rock_3003_0"
                geometry={nodes.rock_3003_0.geometry}
                material={materials.rock_2_mat}
              />
            </group>
            <group
              name="rock_3004"
              position={[2.736, -2.772, 3.799]}
              rotation={[-0.146, 0.16, 2.928]}
              scale={0.199}
            >
              <mesh
                name="rock_3004_0"
                geometry={nodes.rock_3004_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rocks_1"
              position={[-2.16, -3.343, 0.197]}
              rotation={[-0.169, -0.111, 0.141]}
              scale={[0.357, 0.356, 0.101]}
            >
              <mesh
                name="rocks_1_0"
                geometry={nodes.rocks_1_0.geometry}
                material={materials.rocks_material}
              />
            </group>
            <group
              name="rocks_1001"
              position={[-1.52, -5.412, 0.478]}
              rotation={[0.075, -0.014, 0.621]}
              scale={[0.336, 0.336, 0.051]}
            >
              <mesh
                name="rocks_1001_0"
                geometry={nodes.rocks_1001_0.geometry}
                material={materials.rocks_material}
              />
            </group>
            <group
              name="rocks_2"
              position={[3.832, 3.327, 0.245]}
              rotation={[-0.029, -0.129, -1.925]}
              scale={[0.453, 0.476, 0.16]}
            >
              <mesh
                name="rocks_2_0"
                geometry={nodes.rocks_2_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rocks_3"
              position={[-3.838, 3.473, -0.149]}
              rotation={[-0.021, -0.033, 0.42]}
            >
              <mesh
                name="rocks_3_0"
                geometry={nodes.rocks_3_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="rocks_3001"
              position={[-0.455, -6.81, 0.4]}
              rotation={[-0.129, -0.277, 0.499]}
            >
              <mesh
                name="rocks_3001_0"
                geometry={nodes.rocks_3001_0.geometry}
                material={materials.rock_1_material}
              />
            </group>
            <group
              name="scarecrow001"
              position={[-3.617, 3.047, -0.374]}
              rotation={[0.062, -0.013, 0.5]}
            >
              <mesh
                name="scarecrow001_0"
                geometry={nodes.scarecrow001_0.geometry}
                material={materials.scarecrow_material}
              />
            </group>
            <group
              name="scarecrow_circles"
              position={[-3.617, 3.047, -0.374]}
              rotation={[0.062, -0.013, 0.5]}
            >
              <mesh
                name="scarecrow_circles_0"
                geometry={nodes.scarecrow_circles_0.geometry}
                material={materials.Metal_1_mat}
              />
            </group>
            <group
              name="scarecrow_target"
              position={[-3.617, 3.047, -0.374]}
              rotation={[0.062, -0.013, 0.5]}
            >
              <mesh
                name="scarecrow_target_0"
                geometry={nodes.scarecrow_target_0.geometry}
                material={materials.scarecrow_target}
              />
            </group>
            <group
              name="shelf"
              position={[2.64, -3.173, 3.796]}
              rotation={[0, 0, 1.439]}
            >
              <mesh
                name="shelf_0"
                geometry={nodes.shelf_0.geometry}
                material={materials.shelf_mat}
              />
            </group>
            <group
              name="shelf001"
              position={[4.495, -1.157, 3.822]}
              rotation={[0, 0, -2.845]}
            >
              <mesh
                name="shelf001_0"
                geometry={nodes.shelf001_0.geometry}
                material={materials.shelf_mat}
              />
            </group>
            <group
              name="smoke"
              position={[4.216, -3.314, 9.85]}
              rotation={[-0.135, -0.02, 0.242]}
              scale={0.244}
            >
              <mesh
                name="smoke_0"
                geometry={nodes.smoke_0.geometry}
                material={materials.Smoke_mat}
                morphTargetDictionary={nodes.smoke_0.morphTargetDictionary}
                morphTargetInfluences={nodes.smoke_0.morphTargetInfluences}
              />
            </group>
            <group
              name="soup_ladle"
              position={[-1.548, 0.437, 0.593]}
              rotation={[0.296, -0.069, -1.468]}
              scale={1.65}
            />
            <group
              name="stump"
              position={[1.087, -0.278, 0.048]}
              rotation={[-0.045, -0.019, 1.347]}
            >
              <mesh
                name="stump_0"
                geometry={nodes.stump_0.geometry}
                material={materials.stump_mat}
              />
            </group>
            <group
              name="stump001"
              position={[-0.09, -4.387, 0.426]}
              rotation={[-0.125, 0.032, -2.939]}
              scale={1.202}
            >
              <mesh
                name="stump001_0"
                geometry={nodes.stump001_0.geometry}
                material={materials.stump_mat}
              />
            </group>
            <group
              name="stump002"
              position={[5.889, 2.623, 1.228]}
              rotation={[-0.177, -0.126, -0.701]}
              scale={1.401}
            >
              <mesh
                name="stump002_0"
                geometry={nodes.stump002_0.geometry}
                material={materials.stump_mat}
              />
            </group>
            <group
              name="Sun"
              position={[12.76, 10.098, 15.316]}
              rotation={[-0.875, 0.646, -2.081]}
              scale={0.531}
            >
              <group name="Sun001" />
            </group>
            <group
              name="torch"
              position={[-3.766, -6.575, -0.351]}
              rotation={[-0.167, 0.132, -0.108]}
              scale={1.65}
            >
              <mesh
                name="torch_0"
                geometry={nodes.torch_0.geometry}
                material={materials.Metal_1_mat}
              />
            </group>
            <group
              name="Tree_1"
              position={[10.22, -4.498, 2.126]}
              rotation={[0, 0, -1.514]}
              scale={2.215}
            >
              <mesh
                name="Tree_1_0"
                geometry={nodes.Tree_1_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="Tree_1001"
              position={[8.573, 3.62, 1.535]}
              rotation={[-0.083, -0.056, 2.942]}
              scale={1.871}
            >
              <mesh
                name="Tree_1001_0"
                geometry={nodes.Tree_1001_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="Tree_1002"
              position={[5.791, 11.388, 0.049]}
              rotation={[-0.121, -0.003, 1.168]}
              scale={1.607}
            >
              <mesh
                name="Tree_1002_0"
                geometry={nodes.Tree_1002_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="Tree_1003"
              position={[-3.677, -13.975, 1.811]}
              rotation={[-0.181, -0.027, 0.092]}
              scale={2.215}
            >
              <mesh
                name="Tree_1003_0"
                geometry={nodes.Tree_1003_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="Tree_1004"
              position={[-10.832, 19.783, 1.782]}
              rotation={[-0.096, 0.028, 2.069]}
              scale={1.871}
            >
              <mesh
                name="Tree_1004_0"
                geometry={nodes.Tree_1004_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="Tree_1005"
              position={[-14.454, 12.462, 1.126]}
              rotation={[0.091, -0.073, 2.128]}
              scale={1.871}
            >
              <mesh
                name="Tree_1005_0"
                geometry={nodes.Tree_1005_0.geometry}
                material={materials.tree_1_mat}
              />
            </group>
            <group
              name="tree_2000"
              position={[-22.245, -0.078, 0.248]}
              rotation={[0.312, 0.21, 0.215]}
              scale={[1.349, 1.168, 1.066]}
            >
              <mesh
                name="tree_2000_0"
                geometry={nodes.tree_2000_0.geometry}
                material={materials.tree_3_mat}
              />
            </group>
            <group
              name="tree_2001"
              position={[-7.863, -7.487, -0.03]}
              rotation={[-0.073, -0.22, 0.739]}
              scale={[2.285, 2.285, 1.759]}
            >
              <mesh
                name="tree_2001_0"
                geometry={nodes.tree_2001_0.geometry}
                material={materials.tree_2_mat}
              />
            </group>
            <group
              name="tree_2002"
              position={[8.664, -8.276, 3.217]}
              rotation={[0.111, -0.025, -2.962]}
              scale={[2.298, 2.292, 1.666]}
            >
              <mesh
                name="tree_2002_0"
                geometry={nodes.tree_2002_0.geometry}
                material={materials.tree_2_mat}
              />
            </group>
            <group
              name="tree_2003"
              position={[-18.253, 7.433, -0.03]}
              rotation={[0.035, -0.13, 2.539]}
              scale={[1.839, 1.806, 1.594]}
            >
              <mesh
                name="tree_2003_0"
                geometry={nodes.tree_2003_0.geometry}
                material={materials.tree_3_mat}
              />
            </group>
            <group
              name="tree_2004"
              position={[7.607, 7.16, -0.199]}
              rotation={[-0.05, -0.212, -1.48]}
              scale={[1.279, 1.696, 1.248]}
            >
              <mesh
                name="tree_2004_0"
                geometry={nodes.tree_2004_0.geometry}
                material={materials.tree_2_mat}
              />
            </group>
            <group
              name="tree_2005"
              position={[-3.317, 23.237, 2.04]}
              rotation={[-0.059, 0.033, -1.233]}
              scale={[1.931, 1.896, 1.482]}
            >
              <mesh
                name="tree_2005_0"
                geometry={nodes.tree_2005_0.geometry}
                material={materials.tree_3_mat}
              />
            </group>
            <group
              name="tree_2008"
              position={[12.281, -0.6, 2.946]}
              rotation={[-0.06, 0.008, 0.216]}
              scale={[1.692, 1.696, 1.248]}
            >
              <mesh
                name="tree_2008_0"
                geometry={nodes.tree_2008_0.geometry}
                material={materials.tree_3_mat}
              />
            </group>
            <group
              name="tree_2009"
              position={[3.617, -11.995, 3.111]}
              rotation={[0.08, -0.235, -0.457]}
              scale={[2.285, 2.285, 1.759]}
            >
              <mesh
                name="tree_2009_0"
                geometry={nodes.tree_2009_0.geometry}
                material={materials.tree_3_mat}
              />
            </group>
            <group
              name="tree_3"
              position={[3.719, -6.452, 1.742]}
              rotation={[-0.04, 0.049, 1.441]}
              scale={2.381}
            >
              <mesh
                name="tree_3_0"
                geometry={nodes.tree_3_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="tree_3001"
              position={[7.591, 0.148, 0.322]}
              rotation={[-0.115, 0.207, 0.586]}
              scale={[2.356, 2.38, 2.048]}
            >
              <mesh
                name="tree_3001_0"
                geometry={nodes.tree_3001_0.geometry}
                material={materials.wood_mat}
              />
            </group>
            <group
              name="Vr_cage"
              position={[-1.137, 1.311, -0.522]}
              rotation={[0, 0, -0.4]}
              scale={[5.939, 5.939, 7.217]}
            >
              <mesh
                name="Vr_cage_0"
                geometry={nodes.Vr_cage_0.geometry}
                material={materials.Transparent}
              />
            </group>
            <group
              name="water"
              position={[-6.576, 8.148, -0.558]}
              rotation={[0, 0, -1.614]}
            >
              <mesh
                name="water_0"
                geometry={nodes.water_0.geometry}
                material={materials.water_mat}
                morphTargetDictionary={nodes.water_0.morphTargetDictionary}
                morphTargetInfluences={nodes.water_0.morphTargetInfluences}
                position={[-0.438, -0.067, -0.388]}
              />
            </group>
          </group>
        </group>
        <group
          name="Baba_Yaga"
          position={[0, -0.082, -0.722]}
          rotation={[0, 0, -Math.PI]}
        />
        <group
          name="Imp001"
          position={[0, -0.121, -0.722]}
          rotation={[0, 0, -Math.PI]}
        />
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root001">
            <group
              name="bench001"
              position={[-3.491, -1.74, -0.04]}
              scale={1.488}
            >
              <mesh
                name="bench_0001"
                geometry={nodes.bench_0001.geometry}
                material={materials["bench_mat.001"]}
                position={[2.943, 2.049, 0.066]}
                rotation={[-0.003, -0.036, 0.112]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/map.glb");
