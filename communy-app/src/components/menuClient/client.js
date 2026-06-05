// ServicesSection.jsx
import React, { useState } from "react";
import logo from "../../assets/img/2.png"; 
import header from "../../assets/img/header.png"; 
import producto1 from "../../assets/img/producto1.png"
import producto2 from "../../assets/img/producto2.png"
import producto3 from "../../assets/img/producto3.png"
import producto4 from "../../assets/img/producto4.png"
import { useNavigate } from "react-router-dom";

const servicios = [
  { id: 1, categoria: "Confecciones", nombre: "Confecciones Ruth", ubicacion: "Bogotá D.C", img: producto1 },
  { id: 2, categoria: "Plomeria", nombre: "Plomeria SAS", ubicacion: "Bogotá D.C", img: producto2 },
  { id: 3, categoria: "Reparaciones", nombre: "Reparaciones Jeff", ubicacion: "Bogotá D.C", img: producto3 },
  { id: 4, categoria: "Tecnologia", nombre: "Plomeria SAS", ubicacion: "Bogotá D.C", img: producto4 },
];

const categorias = ["Hogar", "Tecnicos", "Salud", "Educacion"];

function ServicesSection() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredServicios = servicios.filter((s) => {
    return (
      (filter === "" || s.categoria === filter) &&
      s.nombre.toLowerCase().includes(search.toLowerCase())
    );
  });
  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    navigate("/");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  // Client.js (return completo)
  return (
    <div className="client-page">
      <header className="site-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Communy App" className="logo" />
          </div>
  
          <nav className="nav-menu">
            <a href="/home" className="btn-menu">Perfil</a>
            <a href="/login" className="btn-menu">Mis servicios</a>
            <button onClick={handleLogout} className="btn-logout">
            Cerrar sesión
          </button>
          </nav>
  
        </div>
      </header>
  
      <main className="services-section">
        
        <div className="content-img">
          <img src={header} alt="Fondo servicios" />
          <div className="color-fond"></div>
        
          <div className="content-overlay">
            <h2>Encuentra servicios</h2>
        
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar servicio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-info">Buscar servicio</button>
            </div>
        
            <div className="categories">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className={`btn ${filter === cat ? "btn-primary" : "btn-info"}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="services-grid">
          {filteredServicios.map((s) => (
            <div key={s.id} className="service-card">
              <img src={s.img} alt={s.nombre} />
              <h3>{s.categoria}</h3>
              <p>{s.nombre}</p>
              <p>{s.ubicacion}</p>
              <button className="btn btn-outline-primary btn-sm">Ver detalles</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ServicesSection;