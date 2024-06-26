import React, { useEffect } from "react";
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import BuyPage from "./pages/Buy";
import LoginPage from "./pages/LoginPage";
import Account from "./pages/Account";
import { AuthProvider } from './contexts/authContext';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ManagePage from "./pages/ManagePage";

function App () {
    useEffect(() => {
        console.log(`App is running at: ${window.location.href}`);
    }, []);
    
    return (
        <AuthProvider>
            <BrowserRouter basename={process.env.REACT_APP_URI || '/'}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/product/:productId" element={<ProductPage />} />
                    <Route exact path="/lista-imoveis" element={<BuyPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/conta" element={<PrivateRoute element={<Account />} />} />
                    <Route exact path="/gerir-imoveis" element={<PrivateRoute element={<ManagePage />} />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;