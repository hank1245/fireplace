/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 hank_ani.glb 
*/

import React, { useEffect, useRef, useState } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import { useGameStore } from "../../store/gameStore";

export default function HankAni(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/hank_ani.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);
  const { openCharacterDialog, isPlayingLofiMusic } = useGameStore();

  useEffect(() => {
    if (actions && actions["Armature|mixamo.com|Layer0"]) {
      actions["Armature|mixamo.com|Layer0"].play();
    }
    return () => {
      if (actions && actions["Armature|mixamo.com|Layer0"]) {
        actions["Armature|mixamo.com|Layer0"].stop();
      }
    };
  }, [actions]);

  const getMusicOption = () => {
    if (isPlayingLofiMusic) {
      return {
        text: "Stop music",
        action: () => {
          console.log("Dispatching stopLofiMusic event");
          window.dispatchEvent(new CustomEvent("stopLofiMusic"));
          openCharacterDialog({
            text: "The music is off now. Enjoy the relaxing sound of the campfire. If you want music again, just let me know!",
            options: [],
          });
        },
      };
    } else {
      return {
        text: "Play music",
        action: () => {
          window.dispatchEvent(new CustomEvent("playLofiMusic"));
          openCharacterDialog({
            text: "I've turned on some lofi music. Let's enjoy the campfire together. If you don't like the music, just ask me to turn it off anytime.",
            options: [],
          });
        },
      };
    }
  };

  const handleClick = () => {
    openCharacterDialog({
      text: "Hey there! Welcome to my virtual campsite. How can I help you today?",
      options: [
        {
          text: "Tell me about yourself",
          action: () => {
            openCharacterDialog({
              text: "I'm Hank Kim, a frontend developer passionate about React and Three.js. If you're curious about my work, check out the portfolio board behind you.",
              options: [
                {
                  text: "That's awesome!",
                  action: () => {
                    openCharacterDialog({
                      text: "Thank you! Feel free to relax here. Sit around the campfire, listen to the fire and music, and enjoy your time.",
                      options: [],
                    });
                  },
                },
              ],
            });
          },
        },
        {
          text: "Tell me about this place",
          action: () => {
            openCharacterDialog({
              text: "This space was created for people who enjoy studying with lofi music or the sound of a campfire. I wanted a unique way to showcase my portfolio, so I built this virtual campsite.",
              options: [],
            });
          },
        },
        getMusicOption(),
      ],
    });
  };

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Hover 효과를 위한 투명한 박스 */}
      <mesh
        position={[0, 0.5, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      {/* Hover 시 나타나는 색상 표시 */}
      {hovered && (
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.7, 32]} />
          <meshBasicMaterial
            color="#A0522D"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      {/* 실제 Hank 애니메이션 모델 */}
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hank_ani.glb");
