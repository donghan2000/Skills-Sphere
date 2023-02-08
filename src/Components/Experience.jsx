import { useRef , Suspense , useState } from "react";
import { useFrame , extend } from "@react-three/fiber";
import { OrbitControls, Center , useMatcapTexture , useGLTF , shaderMaterial, useTexture  } from "@react-three/drei";
import { Perf } from 'r3f-perf'
import atmosphereVertexShader from './shaders/atmosphere/vertex.js'
import atmosphereFragmentShader from './shaders/atmosphere/fragments.js'
import { AdditiveBlending, BackSide } from "three";
import Hexagonal from './Hexagonal-sphere.js'
import TextSphere from './Text-sphere.js'


export default function Experience(){

    /////////////////////////////////////////////////////////////
    // Animations
    /////////////////////////////////////////////////////////////

    const cubeRef = useRef()
    const sphereRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += 0.001
        sphereRef.current.rotation.y -= 0.001
    })

    /////////////////////////////////////////////////////////////
    // Atmosphere
    /////////////////////////////////////////////////////////////

    const AtmosphereShaderMaterial = shaderMaterial(
        {uTime: 0},
        atmosphereVertexShader,
        atmosphereFragmentShader
    )
    
    
      extend({AtmosphereShaderMaterial})
    
      const Atmosphere = () => {
        const atmos = useRef();
      //   useFrame(({ clock }) => (atmos.current.uTime = clock.getElapsedTime()));
    
        return (
          <mesh scale={[1.1,1.1,1.1]}>
            <sphereGeometry args={[2, 24, 24]} />
            <atmosphereShaderMaterial blending={AdditiveBlending} side={BackSide} ref={atmos}/>
          </mesh>
        );
      };

    return <>

        {/* <Perf position="top-left" />  */}
        <ambientLight/>
        <OrbitControls/>

        <Center>

            <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />

            {/* <Suspense> */}
                <Atmosphere/>

                <group ref={sphereRef} >
                    <Hexagonal scale={1.5}/>
                </group>

                <group ref={cubeRef}>
                    <TextSphere 
                    scale={1.4}
                     position={[0,-1.6,0]}/>
                </group>
            {/* </Suspense> */}

        </Center>


    </>
    
}