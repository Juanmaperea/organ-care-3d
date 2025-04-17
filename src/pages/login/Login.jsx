import { NavLink } from "react-router";
import google_logo from '../../assets/google-logo.png';
import './Login.css';
import OrganCare3D_Transparente from '../../assets/OrganCare3D_Transparente.png'

const Login = () => {
    return (
        <div className="login-container">
            <div className="icon icon1"></div>
            <div className="icon icon2"></div>
            <div className="icon icon3"></div>
            <div className="icon icon4"></div>
            <div className="icon icon5"></div>
            <div className="icon icon6"></div>
            <div className="icon icon7"></div>
            <div className="icon icon8"></div>
            <div className="icon icon9"></div>
            <div className="login-circle">
                <div className="logo-container-login">
                    <img src={OrganCare3D_Transparente} className="logo-login" alt="OrganCare3D"/>
                </div>
                <div className="auth-container">
                    <button className="google-button">
                        <img src={google_logo} className="google-icon" alt="Google"/>
                        Iniciar sesión con Google
                    </button>
                    <p className="register-text">
                        ¿No tienes una cuenta? <a href="/register">Regístrate aquí.</a>
                    </p>
                    <p >
                    <NavLink className="guest-text" to="/" end>
                        O continua como invitado.
                    </NavLink>
                    </p>
                </div>
            </div>
            <div className="background-icons"></div>
        </div>
    );
};

export default Login;