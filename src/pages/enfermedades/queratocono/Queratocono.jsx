import "./Queratocono.css";
import Eye from "./models-3d/Eye";
import Light from "./lights/LightsEye";
import AnnoyingLight from "./models-3d/AnnoyingLight";
import LightsAnnoyingLight from "./lights/LightsAnnoyingLight";
import tratamiento from "../../../assets/tratamiento_icono.png";
import Title from "./texts/Title";
import Staging from "./staging/Staging";
import Controls from "./controls/Controls";
import { useRef, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Queratocono() {
  const [showTitle, setShowTitle] = useState(false);
  const lightRef = useRef();
    const modelRef = useRef();
    const zoomContainerRef = useRef();

  return (
    <div className="queratocono-container">
      <h1 className="enfermedad-title">QUERATOCONO</h1>

      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
            El queratocono es una enfermedad ocular progresiva en la que la
            córnea se adelgaza y se deforma en forma de cono, causando visión
            borrosa, sensibilidad a la luz y otros problemas visuales.
          </p>
        </div>

        <div className="image-keratoconus-section">
          <Canvas
            shadows
            camera={{ position: [2, 2, 5], fov: 50 }}
            style={{ background: "#FFFFFF" }}
          >
            <Light />
            <OrbitControls />
            <Eye />

            {/* Piso de la escena */}
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2.5, 0]}
            >
              <planeGeometry args={[20, 20]} />
              <meshStandardMaterial color="cyan" />
            </mesh>
          </Canvas>
        </div>

        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
            El queratocono provoca visión distorsionada, sensibilidad a la luz,
            cambios frecuentes en la graduación, visión borrosa y dificultad
            para conducir de noche.
          </p>
        </div>
      </div>

      <div className="causa-section">
        <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
        <p className="section-text">
          Las causas exactas del queratocono son desconocidas, pero se cree que
          hay factores genéticos involucrados, ya que puede ser hereditario.
          También se asocia con frotarse excesivamente los ojos, alergias
          crónicas e inflamación ocular. Otros factores de riesgo incluyen
          ciertas condiciones como el síndrome de Down, el síndrome de
          Ehlers-Danlos y el asma.
        </p>
      </div>

      {/*SECCIÓN: SÍNTOMAS */}
      <div className="sintomas-section-kerato">
        <div className="sintomas-header-kerato">
          <h2 className="sintomas-title-kerato">SÍNTOMAS</h2>
        </div>
        <div className="sintomas-container-kerato">
          <div className="sintoma-card-kerato">
            <p className="sintoma-text-kerato">
              El síntoma más frecuente del queratocono es la sensibilidad a la
              luz (fotofobia), acompañada de visión borrosa o distorsionada,
              aumento progresivo de la miopía o astigmatismo, dificultad para
              ver de noche, necesidad constante de cambiar la graduación de
              lentes y presencia de halos o deslumbramientos alrededor de las
              luces
            </p>
          </div>

          <div className="sintoma-card-kerato" >
            <h2 className="sintoma-subtitle-kerato" style={{ color: "#003f54" }}>
              SENSIBILIDAD A LA LUZ
            </h2>
            <Canvas shadows camera={{ position: [2, 2, 5], fov: 50 }} style={{ background: "#FFFFFF" }}>
              <LightsAnnoyingLight />
              <OrbitControls />
              <Staging />
              <Controls targetRef={modelRef} zoomTargetRef={zoomContainerRef}  />
              
              {/* Piso de la escena */}
              <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="cyan" />
              </mesh>
            </Canvas>
            <div className="sintoma-nota-kerato">
              💡 Haz clic en el modelo para que reaccione a la luz  y giralo con ← y → 
            </div>
          </div>
        </div>
      </div>
      <div className="sintomas-footer-kerato"></div>

      {/* SECCIÓN: TRATAMIENTOS */}
      <div className="tratamientos-section">
        <div className="tratamientos-header">
          <h2>TRATAMIENTOS</h2>
        </div>

        <div className="tratamientos-content">
          <div className="sintoma-card-kerato">
          <div className="tratamientos-imagen">
            <img src={tratamiento} alt="tratamiento" width={"150px"} />
          </div>
          </div>
          <div className="sintoma-card-kerato">
            <p className="sintoma-text-kerato">
          {/* <div className="tratamientos-texto"> */}
            
              Lorem ipsum dolor sit amet consectetur. Ornare odio lorem laoreet
              adipiscing vel. Urna sit diam nisl nulla sit sit adipiscing. Enim
              et viverra aenean pellentesque lacus ut tortor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//export default Queratocono;
