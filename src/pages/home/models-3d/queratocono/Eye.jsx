import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Eye = (props) => {
    const { nodes, materials } = useGLTF("models-3d/queratocono/keratoconus-eye.glb");
    const eyeRef = useRef();


    useFrame(() => {
        if (eyeRef.current) {
            eyeRef.current.rotation.y += 0.005;  // Rotacion
        }
        });

    return (
        <group {...props} dispose={null} ref={eyeRef} position={[0, 0, 0]}>
            <mesh
            castShadow // Sombras
            receiveShadow
            geometry={nodes.KeratoconusEye.geometry}
            material={materials.KeratoconusEyeMaterial}
            scale={7500}
            />            
        </group>
    );
};
  
export default Eye;

useGLTF.preload("models-3d/queratocono/keratoconus-eye.glb");