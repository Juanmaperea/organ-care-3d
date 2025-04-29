import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

const Eye = (props) => {
    const { nodes, materials } = useGLTF(
        "models-3d/cataratas/cataratas-eye.glb"
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
            geometry={nodes['tripo_node_c95389c9-5407-4589-92a4-faabed9ddddf'].geometry}
            material={materials['tripo_material_c95389c9-5407-4589-92a4-faabed9ddddf']}
            scale={4}
            />
        </group>
    );
};
  
export default Eye;

useGLTF.preload("models-3d/cataratas/cataratas-eye.glb");