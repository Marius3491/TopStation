import React, { useState, useEffect } from 'react';

const UserLoginCapture = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data)) {
                    const usersArray = data;
                    if (usersArray.length > 0) {
                        const firstUser = usersArray[0];
                        setLoggedInUser(firstUser);
                    } else {
                        console.error('La respuesta del servidor no contiene usuarios.');
                    }
                } else {
                    console.error('La respuesta del servidor no es un array de usuarios.');
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
