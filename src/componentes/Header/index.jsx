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
        <div className="container-sign-out">
          <div className="profile-area">
            <img src={Profile} alt="profile" />
            <strong>Usuario</strong>
          </div>
          <img
            src={Logout}
            alt="logout"
            className="sing-out"
            onClick={handleLogout}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
