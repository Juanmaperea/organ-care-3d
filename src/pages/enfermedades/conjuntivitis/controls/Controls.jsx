import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const Controls = ({ targetRef }) => {
  const [tears, setTears] = useState([]);

  // Animación
  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.y += 0.005;
      const pulse = 1.5 + Math.sin(Date.now() * 0.01) * 0.05;
      targetRef.current.scale.set(pulse, pulse, pulse);
    }

    setTears((prev) =>
      prev.map((tear) => ({ ...tear, y: tear.y - 0.02 })).filter((tear) => tear.y > -1.5)
    );
  });

  // Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!targetRef.current) return;

      if (e.key === 'ArrowLeft') targetRef.current.rotation.y -= 0.1;
      if (e.key === 'ArrowRight') targetRef.current.rotation.y += 0.1;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetRef]);

  // Clic para llorar
  const handleClick = () => {
    let interval = setInterval(() => {
      setTears((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: -0.2 + Math.random() * 0.4,
          y: 0.2 + Math.random() * 0.1,
        },
      ]);
    }, 100);

    setTimeout(() => clearInterval(interval), 3000);
  };

  return (
    <>
      {/* Llamar al handleClick cuando el modelo ya está cargado */}
      {targetRef.current && (
        <primitive object={targetRef.current} onClick={handleClick} />
      )}

      {tears.map((tear) => (
        <mesh key={tear.id} position={[tear.x, tear.y, 0.9]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="skyblue" transparent opacity={0.7} />
        </mesh>
      ))}
    </>
  );
};

export default Controls;
