import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

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

  return (
    <section
      id="menu"
      className={`menu gridrowfull ${menuActive? 'menu-active' : ''}`}
    >
      <div className="website-name col-d-4 col-6 col-t-6">
        <a href="/">Real State</a>
      </div>
      <div className="pages col-d-8 col-6 col-t-6">
        <div className="page-item">
          <a href="/comprar">Comprar</a>
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