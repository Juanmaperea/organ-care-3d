import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Controls = ({ targetRef, zoomTargetRef }) => {
  const [tunnelVision, setTunnelVision] = useState(false);
  const [blurLevel, setBlurLevel] = useState(0);
  const { camera } = useThree();

  const blurOverlayRef = useRef();

  // Animación del modelo
  useFrame(() => {
    if (targetRef.current) {
      const t = Date.now() * 0.001;
      targetRef.current.position.y = Math.sin(t) * 0.05;
      const opacity = 0.9 + Math.sin(t) * 0.1;
      targetRef.current.children[0].material.opacity = opacity;
      targetRef.current.children[0].material.transparent = true;
    }

    if (blurOverlayRef.current) {
      blurOverlayRef.current.material.opacity = blurLevel * 0.1;
    }
  });

  // Evento de teclado: aumentar/disminuir blur
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setBlurLevel((prev) => Math.min(prev + 1, 10));
      }
      if (e.key === 'ArrowLeft') {
        setBlurLevel((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Zoom (sin cambios)
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const zoomSpeed = 0.5;
      camera.position.z += e.deltaY * 0.01 * zoomSpeed;
      camera.position.z = Math.max(1, Math.min(camera.position.z, 10));
    };

    const element = zoomTargetRef?.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [camera, zoomTargetRef]);

  // Clic para alternar visión de túnel
  const handleClick = () => {
    setTunnelVision((prev) => !prev);
  };

  return (
    <>
      {/* Modelo con evento de clic */}
      {targetRef.current && (
        <primitive object={targetRef.current} onClick={handleClick} />
      )}

      {/* Desenfoque frontal */}
      <mesh ref={blurOverlayRef} position={[0, 0, 1]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial color="black" transparent opacity={0} />
      </mesh>

      {/* Visión de túnel circular */}
      {tunnelVision && (
        <mesh position={[0, 0, 0.95]} rotation={[0, 0, 0]}>
          <ringGeometry args={[0.5, 8, 64]} />
          <meshBasicMaterial color="black" side={THREE.DoubleSide} transparent opacity={0.85} />
        </mesh>
      )}
    </>
  );
};

export default Controls;