import "./styles.css";
import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Logout from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }
  return (
    <header>
      <div className="width-limit content-header">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Reading Table</h1>
        </div>
        <div className="container-list">
          <h3>Mangás</h3>
          <h3>Manhuas</h3>
          <h3>Manhwas</h3>
          <h3>LightNovels</h3>
          <h3>WebNovels</h3>
          <h3>Séries</h3>
          <h3>Outros</h3>
          <div className="category-area">
            <h2>Categorias</h2>
          </div>
        </div>
        <div className="container-sign-out">
          <div className="profile-area">
            <img src={Profile} alt="profile" />
            <strong>Usuario</strong>
          </div>
          {/* <img
            src={Logout}
            alt="logout"
            className="sign-out"
            onClick={handleLogout}
          /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
