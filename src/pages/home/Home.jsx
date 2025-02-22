import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";
import OrganCare3D_Transparente from '../../assets/OrganCare3D_Transparente.png'
const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/corazon", {
      state: { userData: { displayName: "oe" } },
    });
  }, [navigate]);

  return (
    <div>
      <img src={OrganCare3D_Transparente} className="logo" alt="OrganCare3D" height={400} width={400}/>
      <button onClick={handleClick}>Ver más enfermedades</button>
    </div>
  );
};

export default Home;
