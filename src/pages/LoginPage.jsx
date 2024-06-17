import React from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs.jsx";
import MenuIntern from "../components/menuIntern/MenuIntern.jsx";
import LoginContainer from "../components/login-container/Login-container.jsx";

const LoginPage = () => {
    return (
        <>
            <MenuIntern />
            <Breadcrumbs />
            <LoginContainer />
        </>
    );
};

export default LoginPage;
