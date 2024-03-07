import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Logout = ({ setIsLoggedIn }) => {
    useEffect(() => {
        // Limpiamos el token de sesión almacenado en localStorage
        localStorage.removeItem('token');
        // Establecemos el estado de autenticación como falso
        setIsLoggedIn(false);
        // Redirigimos al usuario a la página de inicio
        window.location.href = '/';
    }, [setIsLoggedIn]);

    // No necesitamos devolver ningún contenido JSX aquí
    return null;
};

// Definimos las propTypes para garantizar que setIsLoggedIn sea una función
Logout.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default Logout;