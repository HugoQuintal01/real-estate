// src/pages/ManagePage.jsx
import React from 'react';
import MenuIntern from '../components/menuIntern/MenuIntern';
import Manage from '../components/manage/Manage';
import Footer from '../components/footer/Footer';

const ManagePage = () => {
    return (
        <>
            <MenuIntern />
            <Manage />
            <Footer />
        </>
    );
};

export default ManagePage;
