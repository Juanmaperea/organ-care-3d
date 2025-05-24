import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingDust = ({ count = 200 }) => {
  const group = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = THREE.MathUtils.randFloatSpread(10); // -5 a 5
      const y = THREE.MathUtils.randFloatSpread(5) + 1; // 1 a 6
      const z = THREE.MathUtils.randFloatSpread(10); // -5 a 5
      const speed = THREE.MathUtils.randFloat(0.001, 0.005);
      temp.push({ position: new THREE.Vector3(x, y, z), speed });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    particles.forEach((p, i) => {
      p.position.y += Math.sin(state.clock.elapsedTime * p.speed * 10) * 0.001;
      group.current.children[i].position.set(p.position.x, p.position.y, p.position.z);
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="white" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingDust;