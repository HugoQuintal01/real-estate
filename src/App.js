import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cover from './components/cover/Cover';
import Highlight from './components/highlight/Highlight';
import HighlightArrendar from './components/highlightArrendar/HighlightArrendar';
import HighlightComprar from './components/highlightComprar/HighlightComprar';
import Menu from './components/menu/Menu';
import ProductDetail from "./components/productDetail/ProductDetail";

const App = () => {
    return (
        <Router>
            <Menu />
            <Cover />
            <Highlight />
            <HighlightComprar />
            <HighlightArrendar />
            <Routes>
                <Route path="/product/:productId" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
