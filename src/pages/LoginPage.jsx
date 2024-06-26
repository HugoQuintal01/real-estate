import React from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs.jsx";
import MenuIntern from "../components/menuIntern/MenuIntern.jsx";
import LoginContainer from "../components/login-container/Login-container.jsx";
import Footer from "../components/footer/Footer.jsx";

const LoginPage = () => {
    return (
        <>
            <MenuIntern />
            <Breadcrumbs />
            <LoginContainer />
            <Footer />
        </>
    );
};

export default LoginPage;
