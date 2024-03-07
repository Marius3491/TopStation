import React, { useState, useEffect } from 'react';
import UserLoginCapture from "../UserLoginCapture/UserLoginCapture";

const Cart = ({ setIsLoggedIn }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const initializeCart = async () => {
            try {
                const response = await fetch('http://localhost:3002/games/');
                if (!response.ok) {
                    throw new Error('Error al obtener los juegos del servidor');
                }
                const data = await response.json();

                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error('No se encontraron juegos disponibles');
                }

                const updatedCartItems = data.map((game) => ({ ...game, quantity: 0 }));
                setCartItems(updatedCartItems);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al inicializar el carrito:', error);
                setIsLoading(false);
            }
        };

        initializeCart().then(() => {
            console.log("El carrito se ha inicializado correctamente.");
        }).catch(error => {
            console.error("Error al inicializar el carrito:", error);
        });

    }, []);

    const addToCart = (game) => {
        const existingItemIndex = cartItems.findIndex((item) => item.id === game.id);
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        setCartItems(updatedCartItems);
    };
	const removeFromCart = (game) => {
        const existingItemIndex = cartItems.findIndex((item) => item.id === game.id);
        if (cartItems[existingItemIndex].quantity > 0) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity--;
            setCartItems(updatedCartItems);
        }
    };

    const handlePay = () => {
        setCartItems([]);
        alert('Pago realizado con éxito. Gracias por tu compra.');
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    }, [cartItems]);

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <UserLoginCapture />
            <button onClick={handleLogout}>Cerrar Sesión</button>
            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((game) => (
                    <tr key={game.id}>
                        <td><img src={game.image} alt={game.title} style={{ maxWidth: '100px' }} /></td>
                        <td>{game.title}</td>
                        <td>{game.description}</td>
                        <td>€{game.price}</td>
                        <td>{game.quantity}</td>
                        <td>
                            <button onClick={() => addToCart(game)}>Agregar al carrito</button>
							<button onClick={() => removeFromCart(game)}>Quitar del carrito</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p>Total: €{totalPrice}</p>
            <button onClick={handlePay}>Pagar</button>
        </div>
    );
};

export default Cart;
