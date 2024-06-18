// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doSignUserWithEmailAndPassword } from '../../firebase/auth';
import { useAuth } from '../../contexts/authContext';

const Login = ({ toggleHideLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await doSignUserWithEmailAndPassword(email, password);
            alert('Login successful');
            navigate('/'); // Redirect to the homepage
        } catch (error) {
            console.error('Login error:', error.message);
            alert('Invalid credentials');
        }
    };

    return (
        <form className="login-container gridrow col-d-6 col-12 col-t-6" onSubmit={handleLogin}>
            <div className="login-title col-12 col-d-12 col-t-12">
                <h3>Login</h3>
                <span>Enter your credentials to access the platform.</span>
            </div>
            <div className="login-items col-12 col-d-12 col-t-12">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email-id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password-id"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;
