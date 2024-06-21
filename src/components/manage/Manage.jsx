// src/components/manage/Manage.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from '../../contexts/authContext';
import houseData from '../../products/products.json';
import HouseList from './HouseList';
import HouseForm from './HouseForm';

const Manage = () => {
    const { userLoggedIn } = useAuth();
    const [houses, setHouses] = useState(houseData);

    useEffect(() => {
        // Load initial house data from JSON file (if needed)
        setHouses(houseData);
    }, []);

    const existingFields = Object.keys(houses[0] || {});

    const handleAddHouse = (newHouse) => {
        // Generate a unique ID for the new house
        newHouse.id = Date.now().toString();
        setHouses([...houses, newHouse]);
        saveHouseData([...houses, newHouse]);
    };

    const handleEditHouse = (updatedHouse) => {
        const updatedHouses = houses.map(house =>
            house.id === updatedHouse.id ? { ...house, ...updatedHouse } : house
        );
        setHouses(updatedHouses);
        saveHouseData(updatedHouses);
    };

    const handleDeleteHouse = (id) => {
        const updatedHouses = houses.filter(house => house.id !== id);
        setHouses(updatedHouses);
        saveHouseData(updatedHouses);
    };

    const saveHouseData = (data) => {
        // Save updated house data to JSON file (or Firebase, if using Firestore/Realtime Database)
        // For demo purposes, we'll just log the data here
        console.log('Saving updated house data:', data);
        // You can implement actual saving logic to a file or database here
    };

    return (
        <section className="gridrow">
            {userLoggedIn ? (
                <>
                    <h2>Manage House Listings</h2>
                    <HouseList houses={houses} onDelete={handleDeleteHouse} onEdit={handleEditHouse} />
                    <HouseForm onSubmit={handleAddHouse} existingFields={existingFields} />
                </>
            ) : (
                <p>Please log in to manage house listings.</p>
            )}
        </section>
    );
};

export default Manage;