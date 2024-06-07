import React from "react";
import products from "../../products/products.json";

const Cover = () => {
    // Extract unique typologies from products and sort them
    const uniqueTypologies = [...new Set(products.map(product => product.rooms))];
    uniqueTypologies.sort((a, b) => parseInt(a) - parseInt(b));

    // Extract unique locations from products
    const uniqueLocations = [...new Set(products.map(product => product.location))];

    return (
        <section className="cover-section gridrowfull">
            <div className="cover-opacity"></div>
            <div className="cover-text col-12 col-t-12 col-d-12">
                <h1 className="col-12">Encontra o teu lar</h1>
                <p className="col-8">Somos uma agência imobiliária que irá ajudá-lo a encontrar o seu imóvel ideal de que você sonha.</p>
                <p className="col-8">Vamos discutir sobre a sua casa dos sonhos?</p>
            </div>
            <div className="cover-search col-12 col-t-12 col-d-8">
                <div className="input-div col-12 col-t-6 col-d-3">
                    <label htmlFor="type-rent-buy-id">Tipo de Imóvel</label>
                    <select name="type-rent-buy" id="type-rent-buy-id">
                        <option value="Arrendar">Arrendar</option>
                        <option value="Comprar">Comprar</option>
                    </select>
                </div>
                <div className="input-div col-12 col-t-6 col-d-3">
                    <label htmlFor="typology-id">Tipologia</label>
                    <select name="typology" id="typology-id">
                        <option value="">Selecionar Tipologia</option>
                        {uniqueTypologies.map((typology, index) => (
                            <option key={index} value={typology}>T{typology}</option>
                        ))}
                    </select>
                </div>
                <div className="input-div col-12 col-t-6 col-d-3">
                    <label htmlFor="location-id">Localização</label>
                    <select name="localizacao" id="location-id">
                        <option value="">Selecionar Localização</option>
                        {uniqueLocations.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
                <div className="search-button col-12 col-t-6 col-d-3">
                    <button>Procurar</button>
                </div>
            </div>
        </section>
    );
}

export default Cover;
