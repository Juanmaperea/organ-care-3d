import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SparklingDiamonds = ({ count = 40, areaSize = 50 }) => {
  const group = useRef();

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        position: new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(areaSize),
          THREE.MathUtils.randFloat(0, areaSize / 2),
          THREE.MathUtils.randFloatSpread(areaSize)
        ),
        speed: THREE.MathUtils.randFloat(0.5, 1.5),
        baseScale: THREE.MathUtils.randFloat(0.2, 0.6), // tamaño base más variado
      });
    }
    return arr;
  }, [count, areaSize]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    particles.forEach((p, i) => {
      const pulse = 0.1 * Math.sin(t * p.speed * 5 + i);
      const scale = p.baseScale + pulse;
      group.current.children[i].scale.set(scale, scale, scale);

      const opacityPulse = 0.1 + 0.2 * (0.5 + 0.5 * Math.sin(t * p.speed * 5 + i));
      group.current.children[i].material.opacity = THREE.MathUtils.clamp(opacityPulse, 0.05, 0.25); // más traslúcidas
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} rotation={[0, 0, Math.PI / 4]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#a0d8ff"
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
            opacity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

export default SparklingDiamonds;