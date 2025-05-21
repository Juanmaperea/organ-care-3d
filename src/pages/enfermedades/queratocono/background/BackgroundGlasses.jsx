import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Background = ({ modo }) => {
  const blurry = useLoader(TextureLoader, "/background/blurry.jpg");
  const clear = useLoader(TextureLoader, "/background/clear.jpg");

  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[50, 30]} />
      <meshBasicMaterial map={modo === "borroso" ? blurry : clear} />
    </mesh>
  );
};

export default Background;
