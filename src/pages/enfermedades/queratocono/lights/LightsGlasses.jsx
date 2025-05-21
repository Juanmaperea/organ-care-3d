import { useRef, useEffect } from "react";
import { SpotLightHelper, Object3D } from "three";
import { useHelper } from "@react-three/drei";

const LightsGlasses = () => {
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
      <ambientLight intensity={1.5} />

      <spotLight
        //ref={spotLightRef}
        color="white"
        intensity={200}
        angle={Math.PI / 6}
        penumbra={0.3}
        distance={15}
        position={[1, 3, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        />
        <object3D ref={targetRef} position={[0, 0.5, 0]} />

        <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={3}
        position={[20, 0, 0]}
      />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={2}
        position={[-50, -10, -5]}
      />  
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={3}
        position={[-10, 0, 10]}
      />
    </>
  );
};

export default LightsGlasses;