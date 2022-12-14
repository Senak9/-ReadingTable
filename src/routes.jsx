import { Routes, Route } from 'react-router-dom';
import Main from './paginas/Main';
import LoginModal from './componentes/LoginModal';
import CadastrarModal from './componentes/CadastrarModal';


function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<LoginModal/>} />
            <Route path='/cadastrar' element={<CadastrarModal/>} />
        </Routes>    
        )
}


export default MainRoutes;