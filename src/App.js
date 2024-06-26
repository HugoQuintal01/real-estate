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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/lista-imoveis" element={<BuyPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/conta" element={<PrivateRoute element={<Account />} />} />
                        <Route path="/gerir-imoveis" element={<PrivateRoute element={<ManagePage />} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;