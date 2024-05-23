import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.json";
import imageMap from "../../assets/imageMap";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const { name, price, description, category, location, imageUrl, meters, wc, rooms } = product;

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={imageMap[imageUrl]} alt={name} />
            </div>
            <div className="product-info">
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Preço: {price.toLocaleString()}€</p>
                <p>Categoria: {category}</p>
                <p>Localização: {location}</p>
                <p>Área: {meters} m²</p>
                <p>Quartos: {rooms}</p>
                <p>WC: {wc}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
