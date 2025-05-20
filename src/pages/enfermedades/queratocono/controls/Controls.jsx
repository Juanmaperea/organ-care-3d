import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Title from "../texts/Title";
import AnnoyingLight from "../models-3d/AnnoyingLight";

const Controls = ({ targetRef, zoomTargetRef }) => {
  const [showTitle, setShowTitle] = useState(false);

  // Animación
  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.y += 0.007;
    }
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

  // Clic en modelo
  const handleClick = () => {
    setShowTitle(true);
    setTimeout(() => setShowTitle(false), 8000);
  };

  return (
    <>
      <AnnoyingLight ref={targetRef} onClick={handleClick} />
      {showTitle && <Title title="AAAY mis ojos!!!" />}
    </>
  );
};

export default Controls;
