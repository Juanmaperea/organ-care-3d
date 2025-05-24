import { useRef, useEffect } from "react";
import { SpotLightHelper, Object3D } from "three";
import { useHelper } from "@react-three/drei";

const Lights2 = () => {
  const spotLightRef = useRef();
  const targetRef = useRef();

  useHelper(spotLightRef, SpotLightHelper, 'red');

  useEffect(() => {
    if (spotLightRef.current && targetRef.current) {
      spotLightRef.current.target = targetRef.current;
    }
  }, []);

  return (
    <>
      {/* Luz de ambiente para visibilidad general */}
      <ambientLight intensity={0.5} />

      <spotLight
        //ref={spotLightRef}
        color="white"
        intensity={150}
        angle={Math.PI / 6}
        penumbra={0.3}
        distance={15}
        position={[0, 2, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        />
        <object3D ref={targetRef} position={[0, 0, 0]} />

    </>
  );
};

export default Lights2;
