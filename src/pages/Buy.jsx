import React from "react";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs.jsx";
import MenuIntern from "../components/menuIntern/MenuIntern.jsx";
import CategoryPageTitle from "../components/categoryPage/CategoryPage.jsx";
import Footer from "../components/footer/Footer.jsx";

const BuyPage = () => {
    return (
        <>
            <MenuIntern />
            <Breadcrumbs />
            <CategoryPageTitle />
            <Footer />
        </>
    );
};

export default BuyPage;
