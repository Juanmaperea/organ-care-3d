import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Ophthalmoscope = (props) => {
    const { nodes, materials } = useGLTF('models-3d/queratocono/ophthalmoscope.glb')
    
 
    return (
        <group {...props} dispose={null}  position={[-0.2, 0.15, 0]}>
            <mesh
            castShadow // Sombras
            receiveShadow
            geometry={nodes.Ophthalmoscope.geometry}
            material={materials.OphthalmoscopeMaterial}
            scale={180}
            />            
        </group>
    );
};

 export default Ophthalmoscope;

useGLTF.preload("models-3d/queratocono/ophthalmoscope.glb");