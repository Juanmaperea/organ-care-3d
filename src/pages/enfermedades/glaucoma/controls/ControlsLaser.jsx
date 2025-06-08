import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Controls = ({ targetRef }) => {
  const { camera } = useThree();
  const lightRef = useRef();
  const [infoVisible, setInfoVisible] = useState(false);
  const [vibrating, setVibrating] = useState(false);
  const vibrationStartRef = useRef(null);

  // Animación principal
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Luz pulsante
    if (lightRef.current) {
      lightRef.current.intensity = 0.4 + 0.2 * Math.sin(t * 2);
    }

    // Vibración (temporal)
    if (targetRef.current) {
      if (vibrating) {
        const elapsed = t - vibrationStartRef.current;
        if (elapsed < 2) {
          const offset = Math.sin(t * 50) * 0.01;
          targetRef.current.rotation.z = offset;
        } else {
          setVibrating(false);
          targetRef.current.rotation.z = 0;
        }
      }

      // Pulso vertical simple
      const pulse = 0.98 + 0.02 * Math.sin(t * 3);
      targetRef.current.scale.set(1, pulse, 1);
    }
  });

  // Tecla "i" para mostrar información
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'i') {
        setInfoVisible((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDoubleClick = () => {
    setVibrating(true);
    vibrationStartRef.current = performance.now() / 1000;
  };

  return (
    <>
      {/* Modelo con doble clic para vibración */}
      {targetRef.current && (
        <primitive object={targetRef.current} onDoubleClick={handleDoubleClick} />
      )}

      {/* Luz pulsante */}
      <pointLight
        ref={lightRef}
        position={[0, 0, 1.5]}
        color="red"
        intensity={0.5}
        distance={2}
      />

      {/* Información técnica como HTML */}
      {infoVisible && (
        <Html position={[0, 1.5, 2.5]} center style={{ pointerEvents: 'none' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#111',
            maxWidth: '250px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)'
          }}>
            <strong>Láser SLT SOLO:</strong><br />
            Realiza la trabeculoplastia selectiva para el tratamiento del glaucoma.
          </div>
        </Html>
      )}
    </>
  );
};

export default Controls;