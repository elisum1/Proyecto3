import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [showMain, setShowMain] = useState(true);
  const [showLists, setShowLists] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showUseful, setShowUseful] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">BestDay</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title" onClick={() => setShowMain(!showMain)}>PRINCIPAL</p>
          {showMain && (
            <li>
              <DashboardIcon className="icon" />
              <span>Tablero</span>
            </li>
          )}

          <p className="title" onClick={() => setShowLists(!showLists)}>LISTAS</p>
          {showLists && (
            <>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Usuarios</span>
                </li>
              </Link>
              <Link to="/hotels" style={{ textDecoration: "none" }}>
                <li>
                  <StoreIcon className="icon" />
                  <span>Hoteles</span>
                </li>
              </Link>
              <Link to="/rooms" style={{ textDecoration: "none" }}>
                <li>
                  <CreditCardIcon className="icon" />
                  <span>Habitaciones</span>
                </li>
              </Link>
              <li>
                <LocalShippingIcon className="icon" />
                <span>Entrega</span>
              </li>
            </>
          )}

          <p className="title" onClick={() => setShowUseful(!showUseful)}>ÚTIL</p>
          {showUseful && (
            <>
              <li>
                <InsertChartIcon className="icon" />
                <span>Estadísticas</span>
              </li>
              <li>
                <NotificationsNoneIcon className="icon" />
                <span>Notificaciones</span>
              </li>
            </>
          )}

          <p className="title" onClick={() => setShowService(!showService)}>SERVICIO</p>
          {showService && (
            <>
              <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>Salud del sistema</span>
              </li>
              <li>
                <PsychologyOutlinedIcon className="icon" />
                <span>Registros</span>
              </li>
              <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Configuraciones</span>
              </li>
            </>
          )}

          <p className="title" onClick={() => setShowUser(!showUser)}>USUARIO</p>
          {showUser && (
            <>
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Perfil</span>
              </li>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Cerrar sesión</span>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
