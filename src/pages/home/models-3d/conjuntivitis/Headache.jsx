import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'

const Headache = (props) => {
    const { nodes, materials } = useGLTF(
        "models-3d/conjuntivitis/headache-model-3d.glb"
    );
    const eyeRef = useRef();

    useFrame(() => {
        if (eyeRef.current) {
            eyeRef.current.rotation.y += 0.005;
        }
        const pulse = 1.5 + Math.sin(Date.now() * 0.01) * 0.05;
    eyeRef.current.scale.set(pulse, pulse, pulse);
        });

    return (
        <group {...props} dispose={null} scale={1.8} ref={eyeRef} position={[0, 0.5, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headache.geometry}
            material={materials.HeadacheMaterial}>
            </mesh>
        </group>
    );
};
  
export default Headache;

useGLTF.preload("models-3d/conjuntivitis/headache-model-3d.glb");