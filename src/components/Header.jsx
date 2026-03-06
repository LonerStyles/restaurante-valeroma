import "../styles/Header.css";
import loginIcon from "../assets/loginIcon.png";
import registerIcon from "../assets/registerIcon.png";

export default function Header() {
  return (
    <header>
      <div className="headerRow1">
        <div></div>
        <span className="headerTitle">VALEROMA</span>
        <div className="headerButtons">
          <button className="loginBtn">
            <img src={loginIcon} alt="login" />
            INICIAR SESION
          </button>
          <button className="registerBtn">
            <img src={registerIcon} alt="login" />
            REGISTRARSE
          </button>
        </div>
      </div>
      <ul className="headerRow2">
        <li>
          <a href="/">INICIO</a>
        </li>
        <li>
          <a href="/">RESERVAR</a>
        </li>
        <li>
          <a href="/">HISTORIA</a>
        </li>
        <li>
          <a href="/">CARTA</a>
        </li>
        <li>
          <a href="/">CONTACTO</a>
        </li>
      </ul>
    </header>
  );
}
