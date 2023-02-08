/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef , useEffect , useState  } from "react";
import { useGLTF , useMatcapTexture } from "@react-three/drei";

export default function TextSphere(props) {
  
  const { nodes, materials } = useGLTF("./model/text sphere.glb");

  const cube = useRef()

  /////////////////////////////////////////////////////////////
    // MatCap
    /////////////////////////////////////////////////////////////

  const [material , setMaterial ] = useState()
  const [matcapTexture ] = useMatcapTexture('C7C7D7_4C4E5A_818393_6C6C74', 256)

  
  return <>

  <meshMatcapMaterial ref={setMaterial}  matcap={matcapTexture}/>
    
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.BootStrap002.geometry}
        material={nodes.BootStrap002.material}
        position={[0.02, 1.48, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        geometry={nodes.Css002.geometry}
        material={nodes.Css002.material}
        position={[0.02, 1.05, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
          
        geometry={nodes.Git002.geometry}
        material={nodes.Git002.material}
        position={[0.02, 0.78, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.HTML002.geometry}
        material={nodes.HTML002.material}
        position={[0.02, 1.6, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.Javascript002.geometry}
        material={nodes.Javascript002.material}
        position={[0.02, 0.67, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.JQuery002.geometry}
        material={nodes.JQuery002.material}
        position={[0.02, 1.41, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.JSON002.geometry}
        material={nodes.JSON002.material}
        position={[0.02, 1.58, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.MongoDB002.geometry}
        material={nodes.MongoDB002.material}
        position={[0.02, 0.7, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.mySQL002.geometry}
        material={nodes.mySQL002.material}
        position={[0.02, 1.73, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.Node_Js002.geometry}
        material={nodes.Node_Js002.material}
        position={[0.02, 0.6, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.npm002.geometry}
        material={nodes.npm002.material}
        position={[0.02, 1.75, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.R3F002.geometry}
        material={nodes.R3F002.material}
        position={[0.02, 1.21, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.React_Js002.geometry}
        material={nodes.React_Js002.material}
        position={[0.02, 1.02, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.User_Experience002.geometry}
        material={nodes.User_Experience002.material}
        position={[0.02, 0.93, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
      <mesh
        
        geometry={nodes.User_Interface002.geometry}
        material={nodes.User_Interface002.material}
        position={[0.02, 0.53, -0.02]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        >
        <meshMatcapMaterial matcap={matcapTexture}/>
      </mesh>
    </group>
  </>
}

useGLTF.preload("/text sphere.glb");