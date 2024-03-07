import React, { useState, useEffect } from 'react';

const UserLoginCapture = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                data.users = undefined;
                if (data && data.users && data.users.length > 0) {
                    // Supongamos que estamos capturando el primer usuario de la lista
                    const firstUser = data.users[0];
                    setLoggedInUser(firstUser);
                } else {
                    console.error('No se encontraron usuarios en la respuesta del servidor.');
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : loggedInUser ? (
                <p>¡Bienvenido, {loggedInUser.username}!</p>
            ) : (
                <p>No hay ningún usuario logueado.</p>
            )}
        </div>
    );
}

export default UserLoginCapture;
