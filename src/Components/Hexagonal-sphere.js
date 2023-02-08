/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";



export default function Hexagonal(props) {
  const { nodes, materials } = useGLTF("./model/hexagonal.glb");
  
  return (
    <group {...props} dispose={null} onPointerEnter={(event) => event.stopPropagation}>
      <mesh geometry={nodes.Wire001.geometry} material={materials.Wire} />
      <mesh
        geometry={nodes.DualMesh002.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/hexagonal.glb");
