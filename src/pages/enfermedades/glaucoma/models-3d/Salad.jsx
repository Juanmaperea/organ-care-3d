import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'

const Salad = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF(
        "models-3d/glaucoma/salad.glb"
    );
    
    const saladRef = useRef();

    useImperativeHandle(ref, () => saladRef.current);

    return (
        <group {...props} dispose={null} ref={saladRef} position={[0, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Salad.geometry}
            material={materials.SaladMaterial}
            scale={15}
            />
        </group>
    );
});

export default Salad;

useGLTF.preload("models-3d/glaucoma/salad.glb");