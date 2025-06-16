import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Controls = ({ targetRef }) => {
  const { camera } = useThree();

  const [jumping, setJumping] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [cameraTopView, setCameraTopView] = useState(false);

  const jumpStartY = useRef(0);
  const gravity = -0.005;
  const bounceDamping = 0.6; // Reduce la fuerza del rebote

  // Animación: rotación inclinada + salto amortiguado
  useFrame(() => {
    const t = Date.now() * 0.001;

    if (targetRef.current) {
      // Rotación inclinada
      targetRef.current.rotation.x = Math.sin(t) * 0.2;
      targetRef.current.rotation.z = Math.sin(t * 1.5) * 0.1;

      // Movimiento vertical por salto
      if (jumping) {
        const currentY = targetRef.current.position.y;
        const newVelocity = velocity + gravity;
        const newY = currentY + newVelocity;

        if (newY <= jumpStartY.current) {
          // Toca el suelo
          const dampedVelocity = -newVelocity * bounceDamping;

          // Si el rebote es muy pequeño, termina
          if (Math.abs(dampedVelocity) < 0.02) {
            targetRef.current.position.y = jumpStartY.current;
            setVelocity(0);
            setJumping(false);
          } else {
            setVelocity(dampedVelocity);
            targetRef.current.position.y = jumpStartY.current;
          }
        } else {
          targetRef.current.position.y = newY;
          setVelocity(newVelocity);
        }
      }
    }
  });

  // Clic: salto con altura moderada
  const handleClick = () => {
    if (targetRef.current && !jumping) {
      jumpStartY.current = targetRef.current.position.y;
      setVelocity(0.12); // más bajo que antes
      setJumping(true);
    }
  };

  // Espacio: alternar entre vista frontal y superior
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        if (cameraTopView) {
          camera.position.set(0, 0, 5);
          camera.lookAt(0, 0, 0);
        } else {
          camera.position.set(0, 5, 0.01); // evitar lookAt en Z = 0
          camera.lookAt(0, 0, 0);
        }
        setCameraTopView((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [camera, cameraTopView]);

  return (
    <>
      {targetRef.current && (
        <primitive object={targetRef.current} onClick={handleClick} />
      )}
    </>
  );
};

export default Controls;