import { BrowserRouter, Route, Routes } from "react-router-dom";
import Simo from "./pages/Simo";
import Discover from "./pages/Discover";
import Join from "./pages/Join";
import SignIn from "./pages/SignIn";
import Menu from "./Menu";

 function AppRoutes () {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Simo />} />
                <Route path="/1" element={<Discover />} />
                <Route path="/2" element={<Join />} />
                <Route path="/3" element={<SignIn />} />
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;