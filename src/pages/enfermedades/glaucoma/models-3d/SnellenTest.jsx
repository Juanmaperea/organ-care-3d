import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

const SnellenTest = (props) => {
    const { nodes, materials } = useGLTF(
        "models-3d/glaucoma/snellen-test.glb"
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
            geometry={nodes.SnellenTest.geometry}
            material={materials.SnellenTestMaterial}
            scale={5}
            />
        </group>
    );
};
  
export default SnellenTest;

useGLTF.preload("models-3d/glaucoma/snellen-test.glb");