import { useFrame } from "@react-three/fiber";

const ControlsEye = ({ targetRef }) => {

  // Animación
  useFrame(() => {
    if (targetRef.current) {
      targetRef.current.rotation.y += 0.007;
    }
  });
};

export default ControlsEye;
