import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Glasses = (props) => {
    const { nodes, materials } = useGLTF('models-3d/queratocono/glasses.glb')
    
 
    return (
        <group {...props} dispose={null}  position={[0.2, 0.2, 0]}>
            <mesh
            castShadow // Sombras
            receiveShadow
            geometry={nodes.Glasses.geometry}
            material={materials.GlassesMaterial}
            scale={300}
            
            />            
        </group>
    );
};

 export default Glasses;

useGLTF.preload("models-3d/queratocono/glasses.glb");





