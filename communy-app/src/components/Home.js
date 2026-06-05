// Home.jsx
import React from "react";
import logo from "../assets/img/2.png";
import homeBg from "../assets/img/header.png"; // imagen de fondo decorativa

function Home() {
  return (
    <div className="home-page">
      <header className="client-header">
        <div className="header-content">
          <img src={logo} alt="Communy App" className="logo" />
          <nav className="nav-menu">
            <a href="/Home" className="btn btn-login">Home</a>
            <a href="/nosotros" className="btn btn-register">Nosotros</a>
            <a href="/" className="btn btn-login">Iniciar sesión</a>
            <a href="/register" className="btn btn-register">Registrar</a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-bg">
          <img src={homeBg} alt="Fondo home" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Bienvenido a <span className="text-success">Communy App</span></h1>
            <p>Conecta con servicios y profesionales de tu comunidad de manera rápida y segura.</p>
            <div className="hero-buttons">
              <a href="/register" className="btn btn-register">Regístrate</a>
              <a href="/login" className="btn btn-login">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Qué puedes hacer con Communy App</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Encuentra servicios</h3>
            <p>Busca y contacta a profesionales cerca de ti de forma rápida y segura.</p>
          </div>
          <div className="feature-card">
            <h3>Publica tus servicios</h3>
            <p>Si eres emprendedor, ofrece tus servicios a la comunidad de manera sencilla.</p>
          </div>
          <div className="feature-card">
            <h3>Gestiona tu perfil</h3>
            <p>Mantén tu información actualizada y recibe solicitudes de clientes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home