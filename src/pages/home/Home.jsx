import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router";

import './Home.css';
import eyeImage from '../../assets/eye.jpg'; 
// Importa las imágenes de los iconos de enfermedades
import oceye from '../../assets/oc-eye.gif'; 

// Icono para el quiz
import checkIcon from '../../assets/check-icon.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Primera sección - Hero */}
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="title">
            TÍTULO<br />EMOCIONANTE.
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. 
            Purus vel elit tincidunt viverra suspendisse ut 
            feugiat faucibus. Condimentum massa 
            ridiculus at porttitor sed suspendisse eleifend. 
            Nunc mauris enim proin id lorem phasellus 
            tincidunt. Elit cursus sit nulla suspendisse 
            volutpat tempus sed scelerisque aliquam. 
            Quam imperdiet montes sed ipsum.
          </p>
        </div>
        
        <div className="image-section">
          <div className="image-container">
            <img src={eyeImage} alt="Ojo humano" className="eye-image" />
            <div className="zoom-controls">
              <button className="zoom-button zoom-in">+</button>
              <button className="zoom-button zoom-out">-</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="button-container">
        <button className="adventure-button">¡Comienza tu aventura aquí!</button>
      </div>

      {/* Segunda sección - Enfermedades */}
      <div className="diseases-section">
        <div className="diseases-header">
          <h2 className="diseases-title">ANÍMATE A<br />APRENDER SOBRE ...</h2>
          <p className="diseases-subtitle">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="diseases-cards">
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 1" />
            </div>
            <h3 className="disease-name">ENFERMEDAD 1</h3>
            <NavLink className="guest-text" to="/queratocono" end>
            <button className="disease-button">¡Ir aquí!</button>
            </NavLink>
          </div>
          
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 2" />
              <div className="disease-icon-overlay">
                <div className="disease-icon-lightning"></div>
                <div className="disease-icon-lightning"></div>
                <div className="disease-icon-lightning"></div>
              </div>
            </div>
            <h3 className="disease-name">ENFERMEDAD 2</h3>
            <NavLink className="guest-text" to="/conjuntivitis" end>
            <button className="disease-button">¡Ir aquí!</button>
            </NavLink>
          </div>
          
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 3" />
              <div className="disease-icon-gear"></div>
            </div>
            <h3 className="disease-name">ENFERMEDAD 3</h3>
            <NavLink className="guest-text" to="/glaucoma" end>
            <button className="disease-button">¡Ir aquí!</button>
            </NavLink>
          </div>
          
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 4" />
              <div className="disease-icon-drops"></div>
            </div>
            <h3 className="disease-name">ENFERMEDAD 4</h3>
            <button className="disease-button">¡Ir aquí!</button>
          </div>
        </div>
      </div>

      {/* Tercera sección - Quiz Interactivo */}
      <div className="quiz-section">
        <div className="quiz-content">
          <h2 className="quiz-title">¿TE ATREVES A INTENTARLO?</h2>
          
          <div className="quiz-icon-container">
            <img src={checkIcon} alt="Quiz check" className="quiz-check-icon" />
          </div>
          
          <h3 className="quiz-subtitle">Quiz Interactivo</h3>
          
          <p className="quiz-description">
            Demuestra tu aprendizaje sobre las enfermedades y autocuidado de este órgano.
          </p>
          
          <Link to="/quiz" className="quiz-button">
            Intentar
          </Link>
        </div>
        <div className="quiz-background-shape"></div>
      </div>
    </div>
  );
};

export default Home;