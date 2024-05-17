import React from "react";

const Menu = () => {
    return (
        <section id="menu" className="menu gridrowfull">
            <div className="website-name col-d-4 col-6 col-t-6">
                <a href="/">Real State</a>
            </div>
            <div className="pages col-d-8 col-6 col-t-6">
                <div className="page-item">
                    <a href="#about">Comprar</a>
                </div>
                <div className="page-item">
                    <a href="#work">Arrendar</a>
                </div>
                <div className="page-item contact-item">
                    <a href="#scrollDown">Contact</a>
                </div>
            </div>
        </section>
    );
}

export default Menu;