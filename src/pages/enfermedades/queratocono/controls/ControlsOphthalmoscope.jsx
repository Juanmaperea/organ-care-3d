import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Title from "../texts/Title";
import Ophthalmoscope from "../models-3d/Ophthalmoscope";
import { VideoTexture, TextureLoader } from "three";

const ControlsOphthalmoscope = ({ targetRef }) => {
  const [showTitle, setShowTitle] = useState(false);
  const modelGroupRef = useRef();
  const { scene } = useThree();

  // Video de Fondo
  useEffect(() => {
  const video = document.createElement('video');
  video.src = "/videos/video2.mp4";
  video.crossOrigin = "anonymous";
  video.loop = true;
  video.muted = true; // necesario para reproducir automáticamente sin interacción
  video.play();

  const videoTexture = new VideoTexture(video);
  scene.background = videoTexture;
}, [scene]);

// Sonido de Fondo
/*
useEffect(() => {
  const backgroundSound = new Audio("/sounds/sound2.mp3");
  backgroundSound.loop = true;
  backgroundSound.volume = 0.1; // volumen suave
  backgroundSound.play().catch((e) => {
    console.warn("El navegador bloqueó el audio hasta que haya interacción", e);
  });

  return () => {
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
  };
}, []);
*/

  // Animación automática
  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.y += 0.005;
    }
  });

  // Controles con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!targetRef.current) return;
      if (e.key === "ArrowLeft") targetRef.current.rotation.y -= 0.1;
      if (e.key === "ArrowRight") targetRef.current.rotation.y += 0.1;
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [targetRef]);

  // Evento de click con rebote
  const handleClick = () => {
    new Audio("/sounds/click.mp3").play();
    
    setShowTitle(true);
    setTimeout(() => setShowTitle(false), 8000);

    // Rebote
    if (modelGroupRef.current) {
      let t = 0;
      const jump = () => {
        if (t < Math.PI) {
          modelGroupRef.current.position.y = Math.sin(t) * 0.25;
          t += 0.1;
          requestAnimationFrame(jump);
        } else {
          modelGroupRef.current.position.y = 0;
        }
      };
      jump();
    }
  };

  return (
    <>
      <group ref={modelGroupRef}>
        <Ophthalmoscope ref={targetRef} onClick={handleClick} />
      </group>
      {showTitle && <Title title="Revisa tu vision!" />}
    </>
  );
};

export default ControlsOphthalmoscope;