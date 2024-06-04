import React from "react";

const MenuIntern = () => {

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
      </div>
    </section>
  );
}

export default MenuIntern;