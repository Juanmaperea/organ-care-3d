import { Sky, Cloud } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedClouds = () => {
  const cloudRef = useRef();

  useFrame((state, delta) => {
    if (cloudRef.current) {
      cloudRef.current.position.x += delta * 0.1; // velocidad del movimiento horizontal
      if (cloudRef.current.position.x > 10) {
        cloudRef.current.position.x = -10; // reinicia el ciclo
      }
    }
  });

  return (
    <Cloud
      ref={cloudRef}
      position={[-10, 5, -10]} // posición inicial fuera del campo
      scale={5}
      opacity={0.2}
      speed={2} // animación interna suave
    />
  );
};

export default AnimatedClouds;