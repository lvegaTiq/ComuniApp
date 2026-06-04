// ServicesSection.jsx
import React, { useState } from "react";
import logo from "../../assets/img/2.png"; 
import producto1 from "../../assets/img/producto1.png"
import producto2 from "../../assets/img/producto2.png"
import producto3 from "../../assets/img/producto3.png"
import producto4 from "../../assets/img/producto4.png"

const servicios = [
  { id: 1, categoria: "Confecciones", nombre: "Confecciones Ruth", ubicacion: "Bogotá D.C", img: producto1 },
  { id: 2, categoria: "Plomeria", nombre: "Plomeria SAS", ubicacion: "Bogotá D.C", img: producto2 },
  { id: 3, categoria: "Reparaciones", nombre: "Reparaciones Jeff", ubicacion: "Bogotá D.C", img: producto3 },
  { id: 4, categoria: "Tecnologia", nombre: "Plomeria SAS", ubicacion: "Bogotá D.C", img: producto4 },
];

const categorias = ["Hogar", "Tecnicos", "Salud", "Educacion"];

function ServicesSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredServicios = servicios.filter((s) => {
    return (
      (filter === "" || s.categoria === filter) &&
      s.nombre.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="services-page">
      {/* Header */}
      <header className="header d-flex align-items-center justify-content-between p-3 border-bottom">
        <img src={logo} alt="Logo" width="50" />
        <div className="flex-fill mx-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar servicio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <nav className="d-flex gap-3 align-items-center">
          <button className="btn btn-outline-primary">Perfil</button>
          <button className="btn btn-outline-danger">Cerrar sesión</button>
          <button className="btn btn-outline-secondary">Mis servicios</button>
        </nav>
      </header>

      <section className="services-section p-4">
        <h2>Encuentra servicios</h2>

        <div className="search-bar d-flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Buscar servicio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-info">Buscar servicio</button>
        </div>

        <div className="categories d-flex gap-2 mb-4">
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

        <div className="services-grid row g-3">
          {filteredServicios.map((s) => (
            <div key={s.id} className="col-md-3">
              <div className="service-card card h-100 p-2 text-center">
                <img
                  src={s.img}
                  className="card-img-top rounded"
                  alt={s.nombre}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{s.categoria}</h5>
                  <p className="mb-1">{s.nombre}</p>
                  <p className="mb-2">{s.ubicacion}</p>
                  <button className="btn btn-outline-primary btn-sm">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;