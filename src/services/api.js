// En src/services/api.js

const BASE_URL = 'http://localhost:3001'; // URL base de JSON Server

const api = {
    // Función para registrar un nuevo usuario
    registerUser: async (userData) => {
        try {
            const response = await fetch(`${BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en el registro de usuario:', error);
            throw error;
        }
    },

    // Función para iniciar sesión
    loginUser: async (credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }
            return await response.json();
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            throw error;
        }
    },

    // Función para agregar un artículo al carrito
    addToCart: async (userId, itemData) => {
        try {
            const response = await fetch(`${BASE_URL}/users/${userId}/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemData)
            });
            if (!response.ok) {
                throw new Error('Error al agregar el artículo al carrito');
            }
            return await response.json();
        } catch (error) {
            console.error('Error al agregar artículo al carrito:', error);
            throw error;
        }
    },

    // Función para eliminar un artículo del carrito
    removeFromCart: async (userId, itemId) => {
        try {
            const response = await fetch(`${BASE_URL}/users/${userId}/cart/${itemId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el artículo del carrito');
            }
            return await response.json();
        } catch (error) {
            console.error('Error al eliminar artículo del carrito:', error);
            throw error;
        }
    },

    // Función para obtener el contenido del carrito de un usuario
    getCartItems: async (userId) => {
        try {
            const response = await fetch(`${BASE_URL}/users/${userId}/cart`);
            if (!response.ok) {
                throw new Error('Error al obtener el contenido del carrito');
            }
            return await response.json();
        } catch (error) {
            console.error('Error al obtener contenido del carrito:', error);
            throw error;
        }
    }
};

export const fetchCartItems = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3002/users/${userId}/cart`);
        if (!response.ok) {
            throw new Error('Error al obtener elementos del carrito');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener elementos del carrito:', error);
        throw error;
    }
};

// Función para eliminar un elemento del carrito
export const deleteCartItem = async (userId, itemId) => {
    try {
        const response = await fetch(`http://localhost:3002/users/${userId}/cart/${itemId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el artículo del carrito');
        }
    } catch (error) {
        console.error('Error al eliminar elemento del carrito:', error);
        throw error;
    }
};

// Función para obtener la lista de juegos
export const fetchGames = async () => {
    try {
        const response = await fetch('http://localhost:3002/games');
        if (!response.ok) {
            throw new Error('Error al obtener la lista de juegos');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener la lista de juegos:', error);
        throw error;
    }
};

// Función para eliminar un elemento del carrito

export default api;