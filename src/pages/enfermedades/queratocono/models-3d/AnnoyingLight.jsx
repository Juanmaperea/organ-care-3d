import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const AnnoyingLight = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(
    "models-3d/queratocono/annoying-light.glb"
  );
  const modelRef = useRef();
  const { onClick } = props;

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007; // Rotacion
    }
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      scale={1.0}
      position={[-0.6, -0.1, 0]}
    >
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
