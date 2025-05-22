import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useGLTF } from '@react-three/drei';

const AnnoyingLight = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("models-3d/queratocono/annoying-light.glb");
  const modelRef = useRef();
  const { onClick } = props;

  useImperativeHandle(ref, () => modelRef.current);

  return (
    <group {...props} ref={modelRef} dispose={null} scale={1} position={[-0.4, -0.1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AnnoyingLight.geometry}
        material={materials.AnnoyingLightMaterial}
        onClick={onClick}
      />
    </group>
  );
});

export default AnnoyingLight;

useGLTF.preload("models-3d/queratocono/annoying-light.glb");

