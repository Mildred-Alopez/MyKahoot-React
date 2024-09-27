import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutAdmin from '../pages/LayoutAdmin/LayoutAdmin';
import LayoutClient from '../pages/LayoutClient/LayoutClient';
import CreateTest from '../pages/CreateTest/CreateTest';
import StartGame from '../pages/StartGame/StartGame';
import ContextTestProvider from '../context/ContextTest';

const RoutesKahoot = () => {
    return (
        <>
            <ContextTestProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LayoutAdmin />} />
                        <Route path='/create' element={<CreateTest />} />
                        <Route path='/game/:codigo' element={<LayoutClient />} />
                        <Route path='/game/:codigo/start' element={<StartGame />} />
                    </Routes>
                </BrowserRouter>
            </ContextTestProvider>
        </>
    );
}

export default RoutesKahoot;