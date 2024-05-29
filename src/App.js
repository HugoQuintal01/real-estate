import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import BuyPage from "./pages/Buy";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/comprar" element={<BuyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
