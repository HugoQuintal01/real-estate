import React from "react";
import ProductDetailComponent from '../components/productDetail/ProductDetail.jsx';
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs.jsx";
import MenuIntern from "../components/menuIntern/MenuIntern.jsx";
import Footer from "../components/footer/Footer.jsx";

const ProductPage = () => {
    return (
        <>
            <MenuIntern />
            <Breadcrumbs />
            <ProductDetailComponent />
            <Footer />
        </>
    );
};

export default ProductPage;
