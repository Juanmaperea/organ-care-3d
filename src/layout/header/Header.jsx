import { NavLink } from "react-router";
import "./Header.css";
import OrganCare3D_Transparente from '../../assets/OrganCare3D_Transparente.png'

const Header = () => {
  return (
    <header>
      <span>
      <NavLink to="/" end>
        <img src={OrganCare3D_Transparente} className="logo" alt="OrganCare3D" height={50} width={50}/>
      </NavLink>
      </span>
      <nav>
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/quiz" end>
          Quiz
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
