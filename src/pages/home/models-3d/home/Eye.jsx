import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

const Eye = (props) => {
    const { nodes, materials } = useGLTF(
        "models-3d/home/normal-eye.glb"
    );
    const eyeRef = useRef();

    useFrame(() => {
        if (eyeRef.current) {
            eyeRef.current.rotation.y += 0.005;
        }
        });

    return (
        <group {...props} dispose={null} ref={eyeRef} position={[0, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.high_poly.geometry}
            material={materials.Material_0}
            scale={5}
            />
        </group>
    );
};
  
export default Eye;

useGLTF.preload("models-3d/home/normal-eye.glb");