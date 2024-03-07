import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    // Obtén la función de navegación
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                setIsLoggedIn(true);
                // Redirige al usuario al carrito después de iniciar sesión
                navigate('/cart');
            } else {
                throw new Error('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" value={credentials.username}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" value={credentials.password}
                           onChange={handleChange}/>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            {/* Enlace para redirigir al usuario a la página de registro */}
            <p>¿Todavía no te has registrado? <Link to="/registration">Regístrate aquí</Link>.</p>
        </div>
    );
};

export default Login;