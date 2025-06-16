import { Center, Html } from "@react-three/drei";
import "./HTML3DSalad.css";

const HTML3DSalad = ({ title }) => {
  return (
    <Center position={[0, 2, -3]}>
      <Html
        center
        transform
        distanceFactor={5}
        wrapperClass="kitchen-title"
      >
        <h1>{title}</h1>
      </Html>
    </Center>
  );
};

export default HTML3DSalad;