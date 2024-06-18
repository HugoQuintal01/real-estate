// src/components/privateRoute/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const PrivateRoute = ({ element }) => {
    const { userLoggedIn } = useAuth();

    return userLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
