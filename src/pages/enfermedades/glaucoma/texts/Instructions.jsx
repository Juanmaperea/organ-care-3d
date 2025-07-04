import { Center, Html, Text, Text3D } from "@react-three/drei";
import "./Instructions.css";

const Title = ({ title }) => {
  return (
    <Center position={[0, 0, 0]}>
      <Html
      //occlude
      center
      transform
      distanceFactor={63}
      wrapperClass="title"
      >
      <h1> {title}</h1>
      </Html>
    </Center>
  );
};

export default Title;