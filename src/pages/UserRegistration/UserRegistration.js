import React, { useState } from 'react';

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Usuario registrado con éxito:', data);
                setSuccessMessage('¡Usuario registrado con éxito!'); // Mostrar el mensaje de éxito
                // Limpiamos el formulario después de enviarlo
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });
            } else {
                throw new Error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            // Aquí podríamos mostrar un mensaje de error al usuario, manejar errores específicos, etc.
        }
    };

    return (
        <div className="form-container">
            <h2>Registro de Usuario</h2>
            {successMessage && <p>{successMessage}</p>} {/* Mostrar el mensaje de éxito si existe */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default UserRegistration;