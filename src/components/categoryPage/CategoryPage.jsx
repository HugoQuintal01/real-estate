import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../products/products.json";
import imageMap from '../../assets/imageMap';

const CategoryPageTitle = () => {
    const [category, setCategory] = useState("Comprar");
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [roomCount, setRoomCount] = useState([0, 0]);
    const [sizeRange, setSizeRange] = useState([0, 0]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minRooms, setMinRooms] = useState(0);
    const [maxRooms, setMaxRooms] = useState(0);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(0);

    useEffect(() => {
        const filteredProducts = products.filter(product => product.category === category);
        if (filteredProducts.length > 0) {
            setMinPrice(Math.min(...filteredProducts.map(product => product.price)));
            setMaxPrice(Math.max(...filteredProducts.map(product => product.price)));
            setMinRooms(Math.min(...filteredProducts.map(product => product.rooms)));
            setMaxRooms(Math.max(...filteredProducts.map(product => product.rooms)));
            setMinSize(Math.min(...filteredProducts.map(product => product.meters)));
            setMaxSize(Math.max(...filteredProducts.map(product => product.meters)));
        }
    }, [category]);

    useEffect(() => {
        setPriceRange([minPrice, maxPrice]);
        setRoomCount([minRooms, maxRooms]);
        setSizeRange([minSize, maxSize]);
    }, [minPrice, maxPrice, minRooms, maxRooms, minSize, maxSize]);

    const filteredProducts = products.filter(product => {
        return (
            product.category === category &&
            product.price >= priceRange[0] && product.price <= priceRange[1] &&
            product.rooms >= roomCount[0] && product.rooms <= roomCount[1] &&
            product.meters >= sizeRange[0] && product.meters <= sizeRange[1]
        );
    });

    return (
        <section className="category-section gridrowfull">
            <div className="category-title col-12">
                <h1>Encontramos {filteredProducts.length} Imóveis para {category.toLowerCase()}</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga, maxime laudantium enim doloremque velit eligendi sapiente, beatae quisquam consequatur ipsum id et molestias. Ab illo ducimus eligendi aliquid quo reprehenderit deleniti exercitationem? Iste quam eaque consectetur enim, expedita a.</span>
            </div>
            <div className="category-content col-12">
                <div className="category-filters col-12 col-t-2 col-d-2">
                    <div className="category-filter">
                        <label>
                            Categoria:
                            <select value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="Comprar">Comprar</option>
                                <option value="Arrendar">Arrendar</option>
                            </select>
                        </label>
                        <label>
                            Preço Mínimo:
                            <input type="range" min={minPrice} max={maxPrice} value={priceRange[0]} onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])} />
                            <span className="input-value">{priceRange[0].toLocaleString()}€</span>
                        </label>
                        <label>
                            Preço Máximo:
                            <input type="range" min={minPrice} max={maxPrice} value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])} />
                            <span className="input-value">{priceRange[1].toLocaleString()}€</span>
                        </label>
                        <label>
                            Quartos Mínimos:
                            <input type="range" min={minRooms} max={maxRooms} value={roomCount[0]} onChange={e => setRoomCount([Number(e.target.value), roomCount[1]])} />
                            <span>{roomCount[0]}</span>
                        </label>
                        <label>
                            Quartos Máximos:
                            <input type="range" min={minRooms} max={maxRooms} value={roomCount[1]} onChange={e => setRoomCount([roomCount[0], Number(e.target.value)])} />
                            <span className="input-value">{roomCount[1]}</span>
                        </label>
                        <label>
                            Tamanho Mínimo (m²):
                            <input type="range" min={minSize} max={maxSize} value={sizeRange[0]} onChange={e => setSizeRange([Number(e.target.value), sizeRange[1]])} />
                            <span className="input-value">{sizeRange[0]} m²</span>
                        </label>
                        <label>
                            Tamanho Máximo (m²):
                            <input type="range" min={minSize} max={maxSize} value={sizeRange[1]} onChange={e => setSizeRange([sizeRange[0], Number(e.target.value)])} />
                            <span className="input-value">{sizeRange[1]} m²</span>
                        </label>
                        <button className="reset-button" onClick={() => {
                            setCategory("Comprar");
                            setPriceRange([minPrice, maxPrice]);
                            setRoomCount([minRooms, maxRooms]);
                            setSizeRange([minSize, maxSize]);
                        }}>Reset</button>
                    </div>
                </div>
                <div className="category-items col-12 col-t-10 col-d-10">
                    {filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} className="highlight-item col-8 col-t-6 col-d-3" key={product.id}>
                            <div className="highlight-item-image">
                                <img src={imageMap[product.imageUrl]} alt={product.name} />
                            </div>
                            <div className="highlight-item-type">
                                <span>{product.category}</span>
                            </div>
                            <div className="highlight-item-info">
                                <div className="highlight-item-title">
                                    <h4>{product.name}</h4>
                                </div>
                                <div className="highlight-item-price">
                                    <span>{product.price.toLocaleString()}€</span>
                                </div>
                                <div className="highlight-item-more-info">
                                    <span>{product.rooms} quartos</span>
                                    <span>{product.meters} m²</span>
                                    <span>{product.wc} wc</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryPageTitle;
