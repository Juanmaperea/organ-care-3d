import React from 'react';
import './Glaucoma.css';
import Eye from '../../home/models-3d/glaucoma/Eye';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Light from '../../home/lights/glaucoma/Lights';

function Glaucoma() {
  return (
    <div className="glaucoma-container">
      <h1 className="enfermedad-title">GLAUCOMA</h1>
      
      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
          El glaucoma es una enfermedad que daña el nervio óptico, que es como el cable que conecta 
          el ojo con el cerebro. Esto pasa porque la presión dentro del ojo sube demasiado.
          Si no se trata, puede hacer que una persona vea borroso o incluso pierda la vista. 
          </p>
        </div>
        
        <div className="image-glaucoma-section">
          <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
            <Light/>
            <OrbitControls />
            <Eye />

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </Canvas>
        </div>
        
        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
          El glaucoma puede hacer que la persona vea borroso, pierda la visión de los lados 
          (como si mirara a través de un tubo) y, si no se trata, puede causar ceguera total. 
          Al principio casi no se sienten síntomas, por eso muchas veces se descubre tarde.
          </p>
        </div>
      </div>
      
      <div className="causa-section">
        <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
        <p className="section-text">
        El glaucoma es causado principalmente por un aumento de presión dentro del ojo, llamado presión 
        intraocular. Esto sucede porque el líquido que normalmente fluye dentro del ojo (el humor acuoso) 
        no drena bien, se acumula y presiona el nervio óptico, dañándolo poco a poco.
        </p>
      </div>
    </div>
  );
}

export default Glaucoma;
