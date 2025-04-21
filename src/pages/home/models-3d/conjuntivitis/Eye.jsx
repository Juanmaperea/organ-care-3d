import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

const Eye = (props) => {
    const { nodes, materials } = useGLTF(
        "models-3d/conjuntivitis/eye-model-3d.glb"
    );
    const eyeRef = useRef();

    useFrame(() => {
        if (eyeRef.current) {
            eyeRef.current.rotation.y += 0.005;
        }
        });

    return (
        <group {...props} dispose={null} scale={15} ref={eyeRef} position={[0, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eye.geometry}
            material={materials.corneaEyeMaterial}
            />
        </group>
    );
};
  
export default Eye;

useGLTF.preload("models-3d/conjuntivitis/eye-model-3d.glb");