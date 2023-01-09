import { Routes, Route } from "react-router-dom";
import Main from "./paginas/Main";
import LoginModal from "./componentes/LoginModal";
import CadastrarModal from "./componentes/CadastrarModal";
import Home from "./paginas/Home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/cadastrar" element={<CadastrarModal />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
