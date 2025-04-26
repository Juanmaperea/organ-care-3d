import React from 'react';
import './Queratocono.css';
import Eye from '../../home/models-3d/queratocono/Eye';
import Light from '../../home/lights/queratocono/Lights';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ojoImage from '../../../assets/eye.jpg'; 



function Queratocono() {
  return (
    <div className="queratocono-container">
      <h1 className="enfermedad-title">QUERATOCONO</h1>
      
      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
          El queratocono es una enfermedad ocular progresiva en la que la córnea 
          se adelgaza y se deforma en forma de cono, causando visión borrosa, 
          sensibilidad a la luz y otros problemas visuales.
          </p>
        </div>


        <div className="image-keratoconus-section">
          <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
            <Light/>
            <OrbitControls />
            <Eye />

            {/* Piso de la escena */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}> 
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="cyan" />
            </mesh>

          </Canvas>
        </div>
        

        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
          El queratocono provoca visión distorsionada, sensibilidad a la luz,
          cambios frecuentes en la graduación, visión borrosa y dificultad para conducir de noche. 
          </p>
        </div>
      </div>
      
      <div className="causa-section">
        <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
        <p className="section-text">
        Las causas exactas del queratocono son desconocidas, pero se cree que hay factores genéticos 
        involucrados, ya que puede ser hereditario. También se asocia con frotarse excesivamente los ojos, 
        alergias crónicas e inflamación ocular. Otros factores de riesgo incluyen ciertas condiciones como 
        el síndrome de Down, el síndrome de Ehlers-Danlos y el asma.
        </p>
      </div>
    </div>
  );
}

export default Queratocono;
