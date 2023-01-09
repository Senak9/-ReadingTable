import "./styles.css";
import Close from "../../assets/close-icon.svg";
import { Link, useNavigate } from "react-router-dom";

function CadastrarModal() {
  const navigate = useNavigate();
  return (
    <div className="container-cadastrar">
      <div className="content-cadastrar">
        <form>
          <div className="header-cadastrar">
            <h2>Cadastrar</h2>
            <img src={Close} alt="logo" onClick={() => navigate("/")} />
          </div>

          <div className="container-inputs">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" />
          </div>

          <div className="container-inputs">
            <label htmlFor="username">Usuario</label>
            <input type="text" name="username" />
          </div>

          <div className="container-inputs">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Senha</label>
            <input type="password" name="senha" />
          </div>

          <div className="container-inputs">
            <label htmlFor="confirmPassword">Confirmação de Senha</label>
            <input type="password" name="confirmPassword" />
          </div>

          <button className="btn-blue btn-big">Entrar</button>
          <Link to="/">Já tem cadastro? Clique aqui!</Link>
        </form>
      </div>
    </div>
  );
}

export default CadastrarModal;
