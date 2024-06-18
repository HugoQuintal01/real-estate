// src/components/accountInfo/AccountInfo.jsx
import React from "react";
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); // Redirect to the homepage after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <section className="gridrow">
            <div className="account-page">
                <h2>Account Information</h2>
                {currentUser ? (
                    <div>
                        <p>Email: {currentUser.email}</p>
                        {/* Add more user info as needed */}
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <p>You are not logged in.</p>
                )}
            </div>
        </section>
    );
};

export default AccountInfo;
