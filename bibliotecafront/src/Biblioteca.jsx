import { BrowserRouter, Routes, Route, link } from 'react-router-dom';
import {Menu} from './pages/Menu';
import {Reservas} from './pages/Reservas';
import {NoRouteError} from './pages/NoRouteError';
import { NavBar } from './components/NavigationBar';
import { Lobby } from './pages/Lobby';

export const Biblioteca = () => {



    return(
        <>
        <div>
            <NavBar/>
                <Routes>
                    <Route index element={Biblioteca}/>
                    <Route exact path="/Menu" Component={Menu} />
                    <Route exact path="/Reservas" Component={Reservas}/>
                    <Route exact path="/Lobby" Component={Lobby}/>
                    <Route path="/*" element={<NoRouteError/>}/>
                </Routes>
            
        </div>
        </>
    )
}