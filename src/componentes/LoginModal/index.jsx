import "./styles.css";
import Close from "../../assets/close-icon.svg";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/home");
  }

  return (
    <div className="container-login">
      <div className="content-login">
        <form onSubmit={handleSubmit}>
          <div className="header-login">
            <h2>Login</h2>
            <img src={Close} alt="logo" onClick={() => navigate("/")} />
          </div>

          <div className="container-inputs">
            <label htmlFor="username">Usuario</label>
            <input type="text" name="username" />
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Senha</label>
            <input type="password" name="senha" />
          </div>

          <button className="btn-blue btn-big">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
