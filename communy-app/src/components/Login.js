import { useState } from "react";
import logoIcon from "../assets/img/2.png"
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Usuario:", user);
    console.log("Contraseña:", password);
  };

  return (
    <div className="login-container">
      <main className="login-panel p-4">
        <div className="text-center mb-3">
          <img
            className="rounded-circle object-fit-cover"
            width="110"
            height="110"
            src={logoIcon}
            alt="Logo de Communy App"
          />

          <h1 className="h1 fw-bold mb-1 mt-1">
            Communy <span className="text-success">App</span>
          </h1>

          <p className="small mb-0">Servicios que conectan personas</p>
        </div>

        <p className="text-center small mb-3">
          Ingresa tus credenciales para lograr ingresar a la página
        </p>

        <section className="login-card p-3">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">
                Usuario
              </label>

              <input
                className="form-control"
                id="user"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoComplete="username"
              />
            </div>
            {user.length > 0 && (
              <button className="clear-input-btn" onClick={() => setUser("")}>×</button>
            )}

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>

              <input
                className="form-control"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {password.length > 0 && (
              <button className="clear-input-btn" onClick={() => setPassword("")}>×</button>
            )}

            <div className="d-grid mb-2">
              <button className="btn btn-success" type="submit">
                Login
              </button>
            </div>
          </form>

          <div className="text-center mb-2">
            <Link className="small text-decoration-none text-brand" to="/forgot-password">
              Olvidé mi contraseña
            </Link>
          </div>

          <p className="small text-center mb-0">
            ¿No tienes cuenta? Regístrate aquí
            <br />
            <Link className="text-decoration-none text-brand" to="/register">
              Registrar
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Login;