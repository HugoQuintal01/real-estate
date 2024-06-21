// src/components/manage/HouseForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HouseForm = ({ onSubmit, existingFields }) => {
    const [formData, setFormData] = useState({
        // Initialize form state with existing fields or default empty values
        ...Object.fromEntries(existingFields.map(field => [field, ''])),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Reset form fields after submission
        setFormData(Object.fromEntries(existingFields.map(field => [field, ''])));
    };

    return (
        <div className="house-form">
            <h3>Add New House</h3>
            <form onSubmit={handleSubmit}>
                {existingFields.map(field => (
                    <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                    />
                ))}
                <button type="submit">Add House</button>
            </form>
        </div>
    );
};

HouseForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    existingFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HouseForm;