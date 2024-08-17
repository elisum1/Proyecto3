import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";

const Login = () => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Variable de control de montaje
  let isMounted = true;

  useEffect(() => {
    // Limpia la bandera al desmontar el componente
    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/auth/login", info);
      console.log("User logged in:", res.data);
      
      if (isMounted) { 
        navigate("/"); // Redirige al dashboard después del inicio de sesión
      }
    } catch (err) {
      if (isMounted) {
        setError(err.response?.data?.message || "An error occurred");
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h2>Login</h2>
        <form className="form">
          <div className="formInput">
            <label>Username</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Username"
              id="username"
              className="lInput"
            />
          </div>
          <div className="formInput">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Password"
              id="password"
              className="lInput"
            />
          </div>
          <button onClick={handleLoginClick} disabled={loading} className="lButton">
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <div className="lError">{error}</div>}
        </form>

        {/* Botón de Registrarse */}
        <button onClick={() => navigate("/register")} className="registerButton">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
