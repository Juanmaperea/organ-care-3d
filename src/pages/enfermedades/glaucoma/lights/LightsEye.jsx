import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import {
  DirectionalLightHelper,
} from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight color={"#F5F5DC"} intensity={10} />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={10}
        position={[5, 10, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={1}
        shadow-camera-far={30}
        />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={2}
        position={[-5, -10, -5]}
      />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={3}
        position={[0, 10, 0]}
      />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={3}
        position={[10, 0, 0]}
      />
      <directionalLight
        //ref={directionalLightRef}
        color="white"
        intensity={3}
        position={[0, 0, 10]}
      />
    </>
  );
};

export default Lights;