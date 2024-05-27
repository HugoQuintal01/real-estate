import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.json";
import imageMap from "../../assets/imageMap";

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? product.imageGallery.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === product.imageGallery.length - 1 ? 0 : prevIndex + 1));
    };

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const { name, price, description, category, location, imageUrl, imageGallery, meters, wc, rooms } = product;

    return (
        <div className="product-detail gridrowfull">
            <div className="product-image col-12 col-t-6 col-d-6">
                <div className="product-images">
                    <div className="main-image">
                        <img src={imageMap[imageGallery[currentImageIndex]]} alt={name} />
                    </div>
                    <div className="image-nav">
                        <button onClick={handlePrevImage}>&#60;</button>
                        <button onClick={handleNextImage}>&#62;</button>
                    </div>
                </div>
                <div className="image-thumbnails">
                    {imageGallery.map((image, index) => (
                        <img
                            key={index}
                            src={imageMap[image]}
                            alt={`Thumbnail ${index}`}
                            className={index === currentImageIndex ? "active" : ""}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="product-info col-12 col-t-6 col-d-6">
                <div className="product-content">
                    <span className="product-category">{category}</span>
                    <h1 className="product-name">{name}</h1>
                    <p className="product-description">{description}</p>
                    <p className="product-price">Preço: <span className="product-value">{price.toLocaleString()}€</span></p>
                    <p className="product-location">Localização: <span className="product-value">{location}</span></p>
                    <p className="product-area">Área: <span className="product-value">{meters} m²</span></p>
                    <p className="product-rooms">Quartos: <span className="product-value">{rooms}</span></p>
                    <p className="product-wc">WC: <span className="product-value">{wc}</span></p>
                    <a href="#contact" className="product-button">Contactar</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
