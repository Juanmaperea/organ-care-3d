import React from 'react';
import './Cataratas.css';
import Eye from '../../home/models-3d/cataratas/Eye';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Light from '../../home/lights/cataratas/Lights';

function Cataratas() {
  return (
    <div className="cataratas-container">
      <h1 className="enfermedad-title">CATARATAS</h1>
      
      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
          Las cataratas son una opacidad en el cristalino del ojo, 
          la lente natural que enfoca la luz en la retina, 
          lo que causa una pérdida de visión gradual y sin dolor. 
          A medida que envejecemos, las proteínas del cristalino se descomponen y se vuelve más opaco, 
          dificultando la visión. 
          </p>
        </div>
        
        <div className="image-cataratas-section">
          <Canvas shadows camera={{ position: [1, 1, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
            <Light/>
            <OrbitControls />
            <Eye />
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          </Canvas>
        </div>
        
        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
          Los síntomas de las cataratas incluyen visión borrosa, 
          dificultad para ver en la noche, 
          sensibilidad a la luz y cambios en la percepción del color. 
          </p>
        </div>
      </div>
      
      <div className="causa-section">
        <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
        <p className="section-text">
        La principal causa de las catartas son la desintegración de las proteínas del cristalino 
        con la edad es la causa más común, es decir el envejecimiento. Tambien hay otros factores que pueden contribuir a su formación,
        como Diabetes, lesiones, antecedentes familiares, tabaquismo y exposición excesiva a la luz ultravioleta entre otros. 
        </p>
      </div>
    </div>
  );
}

export default Cataratas;
