import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoIcon from "../assets/img/2.png"

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAccountType = (type) => {
    setForm({
      ...form,
      accountType: type,
    });
  };

  const validateStep = () => {
    setError("");

    if (step === 1) {
      if (!form.fullName.trim()) {
        setError("El nombre completo es obligatorio.");
        return false;
      }

      if (!form.email.trim()) {
        setError("El correo electrónico es obligatorio.");
        return false;
      }

      if (!form.phone.trim()) {
        setError("El teléfono es obligatorio.");
        return false;
      }

      return true;
    }

    if (step === 2) {
      if (!form.password) {
        setError("La contraseña es obligatoria.");
        return false;
      }

      if (form.password.length < 6) {
        setError("La contraseña debe tener mínimo 6 caracteres.");
        return false;
      }

      if (form.password !== form.confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return false;
      }

      return true;
    }

    if (step === 3) {
      if (!form.accountType) {
        setError("Debes seleccionar si eres cliente o emprendedor.");
        return false;
      }

      if (!form.acceptTerms) {
        setError("Debes aceptar los términos y condiciones.");
        return false;
      }

      return true;
    }

    return true;
  };

  const handleNext = () => {
    const isValid = validateStep();

    if (isValid) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateStep();
    if (!isValid) return;

    // Guardar usuario en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === form.email);
    
    if (existingUser) {
      setError("Este correo ya está registrado.");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    setShowSuccessModal(true);
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
      <div className="register-container">
        <main className="register-panel">
          <div className="text-center mb-4">
            
            <h1 className="register-title">
              Crear <span>Cuenta</span>
            </h1>

            <p className="register-subtitle">
              Regístrate para conectar con servicios de tu comunidad
            </p>
          </div>

          <section className="register-card">
            <div className="register-step-header">
              <span className={step === 1 ? "step-dot active" : "step-dot"}>
                1
              </span>

              <div className="step-line"></div>

              <span className={step === 2 ? "step-dot active" : "step-dot"}>
                2
              </span>

              <div className="step-line"></div>

              <span className={step === 3 ? "step-dot active" : "step-dot"}>
                3
              </span>
            </div>

            <h2 className="register-section-title">
              {step === 1 && "Datos personales"}
              {step === 2 && "Seguridad"}
              {step === 3 && "Tipo de cuenta"}
            </h2>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            {step === 1 && (
              <>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Nombre completo
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-control"
                    value={form.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Ej: Laura Vega"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="Ej: correo@gmail.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="Ej: 3001234567"
                  />
                </div>

                <button
                  className="btn-register"
                  type="button"
                  onClick={handleNext}
                >
                  Siguiente
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar contraseña
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    placeholder="Repite tu contraseña"
                  />
                </div>

                <div className="register-actions">
                  <button className="btn-back" type="button" onClick={handleBack}>
                    Atrás
                  </button>

                  <button
                    className="btn-register"
                    type="button"
                    onClick={handleNext}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <p className="register-help-text">
                  Selecciona cómo quieres usar Communy App.
                </p>

                <div className="account-type-grid mb-3">
                  <button
                    type="button"
                    className={`account-type-card ${
                      form.accountType === "cliente" ? "active" : ""
                    }`}
                    onClick={() => handleAccountType("cliente")}
                  >
                    <strong>Cliente</strong>
                    <span>Busco contratar servicios</span>
                  </button>

                  <button
                    type="button"
                    className={`account-type-card ${
                      form.accountType === "emprendedor" ? "active" : ""
                    }`}
                    onClick={() => handleAccountType("emprendedor")}
                  >
                    <strong>Emprendedor</strong>
                    <span>Quiero ofrecer mis servicios</span>
                  </button>
                </div>

                <div className="form-check mb-4">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                    checked={form.acceptTerms}
                    onChange={handleChange}
                  />

                  <label htmlFor="acceptTerms" className="form-check-label">
                    Acepto los términos y condiciones
                  </label>
                </div>

                <div className="register-actions">
                  <button className="btn-back" type="button" onClick={handleBack}>
                    Atrás
                  </button>

                  <button className="btn-register" type="submit">
                    Registrarme
                  </button>
                </div>
              </form>
            )}

            <p className="small text-center mt-3 mb-0">
              ¿Ya tienes cuenta?{" "}
              <Link className="text-decoration-none text-brand" to="/">
                Iniciar sesión
              </Link>
            </p>
          </section>
        </main>
        {showSuccessModal && (
          <div className="success-modal-backdrop">
            <div className="success-modal">
              <div className="success-icon">
                ✓
              </div>

              <h3>¡Registro exitoso!</h3>

              <p>
                Tu cuenta ha sido creada correctamente en Communy App.
              </p>

              <div className="success-modal-actions">
                <button
                  type="button"
                  className="success-btn-secondary"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Cerrar
                </button>

                <button
                  type="button"
                  className="success-btn-primary"
                  onClick={() => navigate("/")}
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;