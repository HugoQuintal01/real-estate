// src/components/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section gridrowfull">
            <div className="footer-content col-12">
                <div className="footer-branding col-12 col-t-12 col-d-4">
                    <h2>Real Estate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="footer-contact col-12 col-t-12 col-d-4">
                    <h3>Contactos</h3>
                    <p>Email: <a href="mailto:teste@teste.com">teste@teste.com</a></p>
                </div>
                <div className="footer-pages col-12 col-t-12 col-d-4">
                    <h3>Pages</h3>
                    <ul>
                        <li><Link to="/">Ínicio</Link></li>
                        <li><Link to="/lista-imoveis">Lista Imóveis</Link></li>
                        <li><Link to="/login">Entrar</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;