import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Erro from './pages/Erro/erro';
import Header from './componets/Header/header';
import Formulario from './pages/Formulario/formulario';
import Finaliza from './pages/Finaliza/finaliza';
import Metas from './pages/Metas/meta';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/formulario' element={<Formulario/>}/>
                <Route path='/finaliza' element={<Finaliza/>}/>
                <Route path='/metas' element={<Metas/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;