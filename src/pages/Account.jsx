// src/pages/Account.jsx
import React from 'react';
import { useAuth } from '../contexts/authContext';
import AccountInfo from '../components/accountInfo/AccountInfo';
import MenuIntern from '../components/menuIntern/MenuIntern';

const Account = () => {
    return (
        <>
            <MenuIntern />
            <AccountInfo />
        </>
    );
};

export default Account;
