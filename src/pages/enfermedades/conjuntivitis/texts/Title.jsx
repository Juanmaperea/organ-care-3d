import { Center, Html, Text, Text3D } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Center position={[0, 1.8, 0]}>
      {/* <Text3D
        font="/fonts/alice.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.01}
        lineHeight={0.8}
        letterSpacing={0.02}
        size={0.3}
      >
        {`Fuerte ${title}\n ...AAAHHHHHH...! `}
        <meshNormalMaterial />
      </Text3D> */}
      <Html
      //occlude
      center
      transform
      distanceFactor={5}
      wrapperClass="title"
      >
      <h1> {title}</h1>
      </Html>
    </Center>
    // <Text
    //   position={[0, 2, 0]}
    //   color={"orange"}
    //   anchorX={"center"}
    //   anchorY={"middle"}
    //   fontSize={0.5}
    //   font="fonts/alice.ttf"
    // >
    //   {title}
    // </Text>
  );
};

export default Title;