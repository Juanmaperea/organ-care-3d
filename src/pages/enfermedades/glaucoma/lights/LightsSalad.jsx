import { useRef, useEffect } from "react";
import { DirectionalLightHelper, Object3D } from "three";
import { useHelper } from "@react-three/drei";

const Lights4 = () => {
  const dirLightRef = useRef();
  const targetRef = useRef();

  useHelper(dirLightRef, DirectionalLightHelper, 'red');

  useEffect(() => {
    if (dirLightRef.current && targetRef.current) {
      dirLightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      {/* Luz de ambiente para visibilidad general */}
      <ambientLight intensity={0.5} />

      <directionalLight
        color="white"
        intensity={10}
        position={[0, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <object3D ref={targetRef} position={[0, 0, 0]} />
    </>
  );
};

export default Lights4;