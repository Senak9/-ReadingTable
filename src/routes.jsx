import { Routes, Route } from 'react-router-dom';
import Main from './paginas/Main';
import LoginModal from './componentes/LoginModal';


function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<LoginModal/>} />
        </Routes>    
        )
}


export default MainRoutes;