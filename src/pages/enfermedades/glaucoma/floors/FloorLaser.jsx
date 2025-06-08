import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { normalMap } from "three/tsl";

const Floor = () => {
    const PATH = useMemo(() => "/textures/glaucoma/floor-laser/cloth_", []);

    const floorTexture = useTexture({
        map: PATH + "albedo.png",
        normalMap: PATH + "normal-ogl.png",
        roughnessMap: PATH + "roughness.png",
        displacementMap: PATH + "height.png",
        aoMap: PATH + "ao.png",
        metalnessMap: PATH + "metallic.png"
    });

    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial
            map={floorTexture.map}
            normalMap={floorTexture.normalMap}
            roughnessMap={floorTexture.roughnessMap}
            displacementMap={floorTexture.displacementMap}
            aoMap={floorTexture.aoMap}
            metalnessMap={floorTexture.metalnessMap}
          />
        </mesh>
      );
};

export default Floor;