import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Eye = (props) => {
  const { nodes, materials } = useGLTF("models-3d/glaucoma/glaucoma-eye.glb");
  const eyeRef = useRef();
  const [hovered, setHovered] = useState(false);

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
        geometry={nodes.GlaucomaEye.geometry}
        material={materials.GlaucomaEyeMaterial}
        scale={hovered ? 150 : 100} // Aumenta ligeramente cuando hay hover
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
};

export default Eye;

useGLTF.preload("models-3d/glaucoma/glaucoma-eye.glb");