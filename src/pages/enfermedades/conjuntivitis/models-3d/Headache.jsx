import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useGLTF } from '@react-three/drei';

const Headache = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("models-3d/conjuntivitis/headache-model-3d.glb");
  const modelRef = useRef();

  useImperativeHandle(ref, () => modelRef.current);

  return (
    <group {...props} ref={modelRef} dispose={null} scale={1.8} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Headache.geometry}
        material={materials.HeadacheMaterial}
      />
    </group>
  );
});

export default Headache;

useGLTF.preload("models-3d/conjuntivitis/headache-model-3d.glb");