import { BrowserRouter, Route, Routes } from "react-router-dom";
import Simo from "./pages/Simo";
import Discover from "./pages/Discover";
import SignIn from "./pages/SignIn";
import Cabecalho from "./Cabecalho";
import Footer from "Footer";
import '../src/App.css';


 function AppRoutes () {
    return (
        <BrowserRouter >
            <div className='fundo'>
                <Cabecalho />
                <Routes>
                    <Route path="/" element={<Simo  />} />
                    <Route path="/Discover" element={<Discover />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="*" element={<div>Página não encontrada</div>} />
                </Routes>
                <Footer />
            </div>

        </BrowserRouter>
        
        
    );

}

export default AppRoutes;