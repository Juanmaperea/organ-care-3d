import React from 'react';
import './conjuntivitis.css';
import Eye from '../../home/models-3d/conjuntivitis/Eye';
import Light from '../../home/lights/conjuntivitis/Lights';

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
            La conjuntivitis es una inflamación de la conjuntiva, la membrana que recubre la parte blanca del 
            ojo y el interior de los párpados. Puede ser causada por virus, bacterias, alergias o irritantes, 
            y se manifiesta con enrojecimiento, picazón, lagrimeo, secreción y sensación de molestia en los ojos. 
            Es una afección común, generalmente leve, pero en los casos infecciosos puede ser muy contagiosa. 
            Con el tratamiento adecuado, suele curarse sin dejar secuelas.
            </p>
          </div>
          
          <div className="image-conjuntivi-section" >
          <Canvas camera={{ position: [2, 0, 5], fov: 50 }}>
            <Light/>
            <OrbitControls />
            <Eye />
          </Canvas>
        </div>
          
          <div className="info-section efectos">
            <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
            <p className="section-text">
            La conjuntivitis produce efectos como enrojecimiento ocular, picazón, ardor, lagrimeo excesivo, 
            sensación de tener arena en el ojo, secreción (que puede ser clara o espesa), visión borrosa 
            temporal y, en casos infecciosos, los párpados pueden amanecer pegados. Cuando es viral o bacteriana, 
            es altamente contagiosa. Aunque suele ser una afección leve, si no se trata adecuadamente puede 
            causar molestias prolongadas o, en raros casos, complicaciones oculares.
            </p>
          </div>
        </div>
        
        <div className="causa-section">
          <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
          <p className="section-text">
          Puede ser causada por virus, bacterias, alergias 
          o sustancias irritantes. La más común es la viral, relacionada con resfriados y altamente contagiosa. 
          La bacteriana también se contagia y produce secreción espesa, mientras que la alérgica y la provocada 
          por irritantes como humo o cloro no son contagiosas. Los síntomas incluyen enrojecimiento, picazón, 
          lagrimeo y sensación de arenilla. El tratamiento depende de la causa, y la prevención se basa en una 
          buena higiene. Todas estas causas generan inflamación en la conjuntiva.Se debe consultar al médico si 
          hay dolor, pérdida de visión o si los síntomas persisten. 
          </p>
        </div>
      </div>
    );
  }
  
  export default Conjuntivitis;