import { Center, Html } from "@react-three/drei";
import "./HTML3DTest.css";

const HTML3DTest = ({ title }) => {
  return (
    <Center position={[0, 2, 0]}>
      <Html
        center
        transform
        distanceFactor={5}
        wrapperClass="title-test"
      >
        <h1>{title}</h1>
      </Html>
    </Center>
  );
};

export default HTML3DTest;