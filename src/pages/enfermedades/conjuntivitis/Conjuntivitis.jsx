import React from 'react';
import './Conjuntivitis.css';
import Eye from '../../home/models-3d/conjuntivitis/Eye';
import Light from '../../home/lights/conjuntivitis/Lights';
import Headache from '../../home/models-3d/conjuntivitis/Headache';
import LightModel2 from '../../home/lights/conjuntivitis/LightsModel2';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


function Conjuntivitis() {
    return (
      <div className="conjuntivitis-container">
        <h1 className="enfermedad-title">CONJUNTIVITIS</h1>
        
        <div className="info-container">
          <div className="info-section que-es">
            <h2 className="section-title">¿QUÉ ES?</h2>
            <p className="section-text">
            La conjuntivitis es una inflamación de la conjuntiva, causada por virus, bacterias, alergias o 
            irritantes. Es común, leve y suele curarse sin secuelas, aunque puede ser muy contagiosa.
            </p>
          </div>
          
          <div className="image-conjuntivi-section" >
          <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
            <Light/>
            <OrbitControls />
            <Eye />

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="white" />
            </mesh>
          </Canvas>
        </div>
          
          <div className="info-section efectos">
            <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
            <p className="section-text">
            Produce enrojecimiento, picazón, ardor, secreción, lagrimeo, visión borrosa y sensación de arenilla.
            Si no se trata adecuadamente, puede generar molestias oculares persistentes.
            </p>
          </div>
        </div>
        
        <div className="causa-section">
          <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
          <p className="section-text">
          Las causas incluyen virus, bacterias, alergias o irritantes. La viral es la más común y contagiosa.
          La bacteriana también se contagia y genera secreción espesa. Las alérgicas e irritativas no son 
          contagiosas. La prevención se basa en buena higiene y se recomienda consultar al médico si los 
          síntomas persisten o hay dolor o pérdida de visión.
          </p>
        </div>

        {/*SECCIÓN: SÍNTOMAS */}
        <div className="sintomas-section-conjunti">
          <div className="sintomas-header-conjunti">
            <h2 className="sintomas-title-conjunti">SÍNTOMAS</h2>
          </div>
          <div className="sintomas-container-conjunti">

            <div className="sintoma-card-conjunti">
              <p className="sintoma-text-conjunti">
              Los síntomas de la conjuntivitis incluyen enrojecimiento ocular, picazón, lagrimeo, 
              sensación de cuerpo extraño, párpados pegajosos y secreción (clara en casos virales, 
              espesa en bacterianos, y acompañada de picor intenso en los alérgicos), y en algunos 
              casos puede presentarse dolor de cabeza leve asociado al malestar ocular.
              </p>
            </div>

            <div className="sintoma-card-conjunti">
              <h3 className="sintoma-subtitle-conjunti">DOLOR DE CABEZA</h3>
              <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
                <LightModel2/>
                <OrbitControls />
                <Headache />

                {/* Piso de la escena */}
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}> 
                  <planeGeometry args={[20, 20]} />
                  <meshStandardMaterial color="cyan" />
                </mesh>

              </Canvas>
            </div>

          </div>
        </div>
        <div className="sintomas-footer-conjunti"></div>
      </div>
    );
  }
  
  export default Conjuntivitis;