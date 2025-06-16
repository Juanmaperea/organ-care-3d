import React from 'react';
import { Text } from '@react-three/drei';

const Text2DLaser = () => {
  return (
    <Text
      position={[0, 0, -1.7]}
      font="/fonts/alice.ttf"
      fontSize={0.3}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      rotation={[-Math.PI / 2, 0, 0]}
    >
      Ensalada de verduras
    </Text>
  );
};

export default Text2DLaser;