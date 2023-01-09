import "./styles.css";
import Logo from "../../assets/logo.svg";
import Close from "../../assets/close-icon.svg";

function Header() {
  return (
    <div className="container-header">
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Reading Table</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
