import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { BiHome, BiInfoCircle, BiUser, BiLogIn, BiLogOut, BiCart } from 'react-icons/bi';
const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleLogout = () => {
        // Lógica para cerrar sesión y cambiar el estado de isLoggedIn a false
        setIsLoggedIn(false);
    };
    const location = useLocation();
    const isInCartPage = location.pathname === '/cart';
    return (
        <nav>
            <ul>
                <li><Link to="/"><BiHome /> Inicio</Link></li>
                <li><Link to="/about"><BiInfoCircle /> Acerca de</Link></li>
                <li><Link to="/registration"><BiUser /> Registrarse</Link></li>
                {!isInCartPage && !isLoggedIn && (
                    <li><Link to="/login"><BiLogIn /> Iniciar Sesión</Link></li>
                )}
                {isLoggedIn ? (
                    <li><button onClick={handleLogout}><BiLogOut /> Cerrar Sesión</button></li>
                ) : null}
                {isInCartPage && (
                    <li><Link to="/cart"><BiCart /> Carrito</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Header;