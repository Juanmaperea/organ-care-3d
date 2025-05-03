import React from 'react';
import './Glaucoma.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Eye from './models-3d/Eye';
import Light from './lights/Lights2';
import Floor from "./textures/Floor";
import SnellenTest from './models-3d/SnellenTest';
import Light2 from './lights/Lights2';
import Floor2 from "./textures/Floor2";

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
            <Floor />
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

      {/*SECCIÓN: SÍNTOMAS */}
      <div className="sintomas-section-glaucoma">
          <div className="sintomas-header-glaucoma">
            <h2 className="sintomas-title-glaucoma">SÍNTOMAS</h2>
          </div>
          <div className="sintomas-container-glaucoma">

            <div className="sintoma-card-glaucoma">
              <p className="sintoma-text-glaucoma">
              Cuando alguien tiene glaucoma, al principio no siente nada raro. Pero poco a poco empieza 
              a ver menos por los lados, como si estuviera mirando por un tubo o una pajilla. A veces, si 
              el glaucoma es muy fuerte, pueden doler los ojos, ver luces como arcoíris alrededor de los 
              focos, o sentir el ojo rojo o pesado. 
              <br /><br />
              Pero lo más importante es que muchas veces no se nota 
              hasta que ya ha avanzado bastante, por eso es bueno que los doctores revisen tus ojos de vez 
              en cuando, aunque parezca que todo esté bien.
              </p>
            </div>

            <div className="sintoma-card-glaucoma">
              <h3 className="sintoma-subtitle-glaucoma">VISIÓN BORROSA DE TUNEL</h3>
              <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
                <Light2/>
                <OrbitControls />
                <SnellenTest />
                <Floor2 />
              </Canvas>
            </div>

          </div>
        </div>
        <div className="sintomas-footer-glaucoma"></div>

    </div>
  );
}

export default Glaucoma;
