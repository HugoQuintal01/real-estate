// src/components/menuIntern/MenuIntern.jsx
import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const MenuIntern = () => {
    const { userLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); // Redirect to the homepage after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <section id="menu" className="menu menu-intern menu-active gridrowfull">
            <div className="website-name col-d-4 col-6 col-t-6">
                <a href="/">Real State</a>
            </div>
            <div className="pages col-d-8 col-6 col-t-6">
                <div className="page-item">
                    <a href="/lista-imoveis">Imóveis</a>
                </div>
                <div className="page-item contact-item">
                    <a href="#scrollDown">Contactar</a>
                </div>
                {userLoggedIn && (
                    <div className="user-controls">
                        <div className="user-icon">
                            <a href="/account">
                                <img src="/path-to-user-icon.png" alt="User Icon" />
                                <span>logged</span>
                            </a>
                        </div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default MenuIntern;
