// src/components/menu/Menu.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const { userLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setMenuActive(true);
            } else {
                setMenuActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); // Redirect to the homepage after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <section id="menu" className={`menu gridrowfull ${menuActive ? 'menu-active' : ''}`}>
            <div className="website-name col-d-4 col-6 col-t-6">
                <a href="/">Real Estate</a>
            </div>
            <div className="pages col-d-8 col-6 col-t-6">
                <div className="page-item contact-item">
                    <a href="/lista-imoveis">Imóveis</a>
                </div>
                {userLoggedIn && (
                    <div className="user-controls">
                        <div className="user-icon">
                            <a href="/account">
                                <img src="/path-to-user-icon.png" alt="User Icon" />
                            </a>
                        </div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Menu;
