import React from "react";

const Cover = () => {
    return(
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
                        <option value="t0">T0</option>
                        <option value="t1">T1</option>
                        <option value="t2">T2</option>
                        <option value="t3">T3</option>
                        <option value="t4">T4</option>
                        <option value="t5">T5</option>
                    </select>
                </div>
                <div className="input-div col-12 col-t-6 col-d-3">
                    <label htmlFor="location-id">Localização</label>
                    <input name="localizacao" id="location-id" placeholder="Inserir localização" type="text" />
                </div>
                <div className="search-button col-12 col-t-6 col-d-3">
                    <button>Procurar</button>
                </div>
            </div>
        </section>
    );
}

export default Cover;