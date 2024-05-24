import React from "react";
import { Link } from "react-router-dom";
import imageMap from '../../assets/imageMap';
import products from "../../products/products.json";

const HighlightComprar = () => {
    const comprarProducts = products
        .filter(product => product.category === "Comprar")
        .slice(0, 4);

    return( 
        <section className="highlight-comprar-section gridrow">
            <div className="highlight-title col-12">
                <h2 className="col-12">Para comprar</h2>
                <span className="col-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit.</span>
            </div>
            <div className="highlight-list col-12">
                {comprarProducts.map(({ id, name, price, category, imageUrl, rooms, meters, wc }) => (
                    <Link key={id} to={`/product/${id}`} className="highlight-item col-8 col-t-6 col-d-3">
                        <div className="highlight-item-image">
                            <img src={imageMap[imageUrl]} alt={name} />
                        </div>
                        <div className="highlight-item-type">
                            <span>{category}</span>
                        </div>
                        <div className="highlight-item-info">
                            <div className="highlight-item-title">
                                <h4>{name}</h4>
                            </div>
                            <div className="highlight-item-price">
                                <span>{price.toLocaleString()}€</span>
                            </div>
                            <div className="highlight-item-more-info">
                                <span>{rooms} quartos</span>
                                <span>{meters} m²</span>
                                <span>{wc} wc</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default HighlightComprar;