import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'

const SnellenTest = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF(
        "models-3d/glaucoma/snellen-test.glb"
    );
    
    const snellenTestRef = useRef();

    useImperativeHandle(ref, () => snellenTestRef.current);

    return (
        <group {...props} dispose={null} ref={snellenTestRef} position={[0, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.SnellenTest.geometry}
            material={materials.SnellenTestMaterial}
            scale={4}
            />
        </group>
    );
});

export default SnellenTest;

useGLTF.preload("models-3d/glaucoma/snellen-test.glb");