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
          Explora el Ojo Humano:<br />Entiende las Enfermedades del Ojo y Protege tu Visión
          </h1>
          <p className="description">
          Bienvenido a una experiencia inmersiva que te llevará al interior del ojo humano. 
          A través de modelos 3D interactivos, podrás aprender sobre las enfermedades que afectan la visión, 
          sus síntomas, tratamientos y cómo prevenirlas. 
          ¡Descubre todo lo que puedes hacer para mantener tus ojos sanos y proteger tu vista!
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
          <p className="diseases-subtitle">Las siguientes enfermedades</p>
        </div>
        
        <div className="diseases-cards">
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 1" />
            </div>
            <h3 className="disease-name">QUERATOCONO</h3>
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
            <h3 className="disease-name">CONJUNTIVITIS</h3>
            <NavLink className="guest-text" to="/conjuntivitis" end>
            <button className="disease-button">¡Ir aquí!</button>
            </NavLink>
          </div>
          
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 3" />
              <div className="disease-icon-gear"></div>
            </div>
            <h3 className="disease-name">GLAUCOMA</h3>
            <button className="disease-button">¡Ir aquí!</button>
          </div>
          
          <div className="disease-card">
            <div className="disease-icon">
              <img src={oceye} alt="Enfermedad 4" />
              <div className="disease-icon-drops"></div>
            </div>
            <h3 className="disease-name">CATARATA</h3>
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