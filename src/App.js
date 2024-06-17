import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import BuyPage from "./pages/Buy";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/lista-imoveis" element={<BuyPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
