import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const handleGuestClick = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro de usuario
    setIsRegistering(false); // Volver a la pantalla de login después del registro
  };

  return (
    <div className="login">
      <div className="titleContainer">
        <span className="logo">
          Best<span className="logoHighlight">Day</span>
        </span>
      </div>
      <div className="lContainer">
        {!isRegistering ? (
          <>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <button
              disabled={loading}
              onClick={handleLoginClick}
              className="lButton"
            >
              Login
            </button>
            {error && <div className="lError">{error.message}</div>}
            <button onClick={handleGuestClick} className="lGuestButton">
              Continue as Guest
            </button>
            <button onClick={handleRegisterClick} className="lRegisterButton">
              Registrarse
            </button>
          </>
        ) : (
          <>
            <h2>Registro</h2>
            <input
              type="text"
              placeholder="Username"
              id="registerUsername"
              className="lInput"
            />
            <input
              type="email"
              placeholder="Email"
              id="registerEmail"
              className="lInput"
            />
            <input
              type="password"
              placeholder="Password"
              id="registerPassword"
              className="lInput"
            />
            <button
              disabled={loading}
              onClick={handleRegisterSubmit}
              className="lButton"
            >
              Registrarse
            </button>
            {error && <div className="lError">{error.message}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
