import { Routes, Route } from 'react-router-dom';
import Login from './paginas/Login';
function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>    
        )
}


export default MainRoutes;