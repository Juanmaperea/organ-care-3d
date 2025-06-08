import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { useGLTF } from '@react-three/drei'

const Laser = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF(
        "models-3d/glaucoma/laser.glb"
    );
    
    const laserRef = useRef();

    useImperativeHandle(ref, () => laserRef.current);

    return (
        <group {...props} dispose={null} ref={laserRef} position={[0, 0, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Laser.geometry}
            material={materials.LaserMaterial}
            scale={4}
            />
        </group>
    );
});

export default Laser;

useGLTF.preload("models-3d/glaucoma/laser.glb");