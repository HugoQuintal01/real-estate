// src/components/manage/HouseList.jsx
import React from 'react';

const HouseList = ({ houses, onDelete, onEdit }) => {
    return (
        <div className="house-list">
            <h3>House Listings</h3>
            {houses.map(house => (
                <div key={house.id} className="house-item">
                    <h4>{house.name}</h4>
                    <p>{house.description}</p>
                    <button onClick={() => onDelete(house.id)}>Delete</button>
                    <button onClick={() => onEdit(house)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default HouseList;