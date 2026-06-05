import { useState } from "react";
import logoIcon from "../assets/img/2.png"
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate() 
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      u => u.email === user && u.password === password
    );

    if (!foundUser) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    // Redirigir usando React Router
    if (foundUser.accountType === "cliente") {
      navigate("/menu-cliente");
    } else if (foundUser.accountType === "emprendedor") {
      navigate("/menu-emprendedor");
    }
  };

  return (

    <div className="login-page d-grid align-items-center justify-content-center">
      <header className="site-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logoIcon} alt="Logo Communy App" className="logo" />
          </div>

          <nav className="nav-menu">
            <a href="/home" className="btn-menu">Home</a>
            <a href="/nosotros" className="btn-menu">Nosotros</a>
            <a href="/login" className="btn-menu">Iniciar sesión</a>
            <a href="/register" className="btn-menu">Registrar</a>
          </nav>

        </div>
      </header>
      <div className="login-container">
        <main className="login-panel p-4">
          <div className="text-center mb-3">

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
    </div>
  );
}

export default Login;