// Nosotros.jsx
import React from "react";
import logo from "../assets/img/2.png";
import appImage from "../assets/img/app-demo.webp"; // imagen ilustrativa de la app

function Nosotros() {
  return (
    <div className="login-page d-grid align-items-center justify-content-center">
        <header className="site-header">
          <div className="header-content">
            <div className="logo-container">
              <img src={logo} alt="Logo Communy App" className="logo" />
            </div>  
            <nav className="nav-menu">
              <a href="/home" className="btn-menu">Home</a>
              <a href="/nosotros" className="btn-menu">Nosotros</a>
              <a href="/" className="btn-menu">Iniciar sesión</a>
              <a href="/register" className="btn-menu">Registrar</a>
            </nav>  
          </div>
        </header>
        <div className="login-container">
            <section className="nosotros-section">
              <div className="nosotros-container">
                <div className="nosotros-text">
                  <h2>Sobre Communy App</h2>
                  <p>
                    Communy App es una plataforma diseñada para conectar personas con servicios y profesionales en su comunidad de manera rápida y confiable. Nuestro objetivo es facilitar la interacción entre clientes y emprendedores, promoviendo el crecimiento local y la eficiencia en la contratación de servicios.
                  </p>
                  <p>
                    La aplicación fue creada con el fin de brindar una solución práctica a quienes buscan servicios de calidad cerca de ellos, y a la vez ofrecer a los emprendedores una vitrina digital para mostrar sus habilidades y productos de manera profesional y segura.
                  </p>
                </div>

                <div className="nosotros-image">
                  <img src={appImage} alt="Demostración de la app" />
                </div>
              </div>
            </section>
        </div>
    </div>
    
  );
}

export default Nosotros