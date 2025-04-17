import React from 'react';
import './queratocono.css';
import ojoImage from '../../../assets/eye.jpg'; 
function Queratocono() {
  return (
    <div className="queratocono-container">
      <h1 className="enfermedad-title">QUERATOCONO</h1>
      
      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
            El queratocono es una enfermedad ocular progresiva en la que la córnea, 
            normalmente redonda, se adelgaza y comienza a abultarse hacia afuera 
            adquiriendo forma de cono. Este cambio en la forma de la córnea puede 
            causar visión borrosa, sensibilidad a la luz y problemas de visión 
            que pueden afectar la calidad de vida.
          </p>
        </div>
        
        <div className="image-keratoconus-section">
          <img src={ojoImage} alt="Ojo con queratocono" className="eye-keratoconus-image" />
        </div>
        
        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
            Los efectos del queratocono incluyen visión distorsionada, aumento 
            de sensibilidad a la luz y al resplandor, cambios frecuentes en la 
            graduación de las gafas, visión borrosa o nublada, y dificultad 
            para conducir por la noche. En casos avanzados, puede aparecer un 
            anillo de Fleischer y estrías de Vogt en la córnea.
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
