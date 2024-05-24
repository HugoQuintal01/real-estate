import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/menu/Menu';
import Home from './pages/Home';
import ProductDetail from "./pages/ProductDetail";

const App = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
