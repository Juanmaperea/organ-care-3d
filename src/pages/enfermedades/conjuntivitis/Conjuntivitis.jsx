import React from 'react';
import './Conjuntivitis.css';
import Eye from './models-3d/Eye';
import Light from './lights/Lights';
import Headache from './models-3d/Headache';
import LightModel2 from './lights/LightsModel2';
import AnimatedClouds from './lights/AnimationLights/AnimatedClouds';
import Controls from "./controls/Controls";
import Title from "./texts/Title";
import TitleAuxModel2 from "./texts/TitleAuxModel2";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sky, Cloud } from '@react-three/drei';



import { useRef } from 'react';

export default function Conjuntivitis() {
  const modelRef = useRef();
  const zoomContainerRef = useRef();
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
              casos puede presentarse dolor de cabeza asociado al malestar ocular.
              </p>
            </div>

            <div className="sintoma-card-conjunti" style={{ position: 'relative', height: '400px' }} ref={zoomContainerRef}>
              <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: '#FFFFFF' }}>
                {/* Elemento ambiental */}
                <Sky sunPosition={[100, 20, 100]} />
                <AnimatedClouds />

                <Title title={"DOLOR DE CABEZA"} />
                <LightModel2/>
                <Headache ref={modelRef} />
                <Controls targetRef={modelRef} zoomTargetRef={zoomContainerRef}  />

                {/* Piso de la escena */}
                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}> 
                  <planeGeometry args={[20, 20]} />
                  <meshStandardMaterial color="cyan" />
                </mesh>

              </Canvas>
              <div className="sintoma-nota-conjunti">
                <Canvas>
                  <TitleAuxModel2 title={"💡 Haz clic en el modelo para interactuar. Usa las teclas ← y → para moverlo."} />
                </Canvas>
              </div>
            </div>

          </div>
        </div>
        <div className="sintomas-footer-conjunti"></div>
      </div>
    );
  }
  
  //export default Conjuntivitis;