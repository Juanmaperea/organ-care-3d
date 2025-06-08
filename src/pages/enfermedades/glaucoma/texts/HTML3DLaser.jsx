import { Center, Html } from "@react-three/drei";
import "./HTML3DLaser.css";

const HTML3DLaser = ({ title }) => {
  return (
    <Center position={[0, 2, 0]}>
      <Html
        center
        transform
        distanceFactor={5}
        wrapperClass="title-laser"
      >
        <h1>{title}</h1>
      </Html>
    </Center>
  );
};

export default HTML3DLaser;