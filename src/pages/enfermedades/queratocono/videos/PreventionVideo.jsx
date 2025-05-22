import { useVideoTexture } from "@react-three/drei";

const PreventionVideo = () => {
  const texture = useVideoTexture("/videos/video2.mp4", {
    muted: true,
    loop: true,
    autoplay: true,
    crossOrigin: "anonymous",
  });

  return (
    <mesh position={[0, 0, -1.5]}>
      <planeGeometry args={[6, 3]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default PreventionVideo;
