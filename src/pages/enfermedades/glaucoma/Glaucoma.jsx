import React from 'react';
import './Glaucoma.css';
import ojoImage from '../../../assets/glaucoma-eye.jpg'; 

function Glaucoma() {
  return (
    <div className="glaucoma-container">
      <h1 className="enfermedad-title">GLAUCOMA</h1>
      
      <div className="info-container">
        <div className="info-section que-es">
          <h2 className="section-title">¿QUÉ ES?</h2>
          <p className="section-text">
          El glaucoma es una enfermedad que afecta los ojos y puede causar problemas para ver. 
          Esto pasa cuando dentro del ojo hay demasiada presión, y esa presión daña una parte del ojo 
          llamada nervio óptico, que es como un cable que lleva las imágenes al cerebro. Al principio 
          no se siente nada, pero si no se cuida, puede hacer que las personas vean borroso o que pierdan 
          la vista poco a poco. Por eso es importante ir al médico de los ojos para revisarse, aunque no duela.
          </p>
        </div>
        
        <div className="image-glaucoma-section">
          <img src={ojoImage} alt="Ojo con glaucoma" className="eye-glaucoma-image" />
        </div>
        
        <div className="info-section efectos">
          <h2 className="section-title">¿QUÉ EFECTOS TIENE?</h2>
          <p className="section-text">
          Los efectos del glaucoma ocurren poco a poco y muchas veces no se notan al principio. 
          Uno de los primeros cambios es que se empieza a perder la visión de los lados, como si 
          se viera por un tubo. Con el tiempo, la vista se va haciendo más borrosa y difícil, y si 
          no se trata, se puede llegar a perder la vista por completo. Aunque no duele, el daño que 
          causa no se puede curar, por eso es muy importante descubrirlo a tiempo y seguir el tratamiento 
          para que los ojos sigan funcionando bien.
          </p>
        </div>
      </div>
      
      <div className="causa-section">
        <h2 className="section-title">¿QUÉ LA CAUSA?</h2>
        <p className="section-text">
        El glaucoma pasa cuando algo no funciona bien dentro del ojo. Normalmente, el ojo produce 
        un líquido que sale por unos canales muy pequeños. Pero a veces, ese líquido no puede salir 
        bien y se queda atrapado, haciendo que suba la presión dentro del ojo. Esa presión empuja y lastima 
        el nervio óptico, que es el que ayuda a ver. Algunas personas nacen con más riesgo de tener glaucoma, 
        y otras lo pueden tener por hacerse mayores o por otras enfermedades. También puede pasar si alguien 
        se golpea fuerte el ojo o usa ciertos medicamentos por mucho tiempo.
        </p>
      </div>
    </div>
  );
}

export default Glaucoma;
