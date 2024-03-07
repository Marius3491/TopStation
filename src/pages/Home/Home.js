// En src/pages/Home/Home.js

import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import UserLoginCapture from "../../components/UserLoginCapture/UserLoginCapture";

const Home = () => {
    return (
        <div className="home-container"> {/* Agrega una clase al contenedor para aplicar estilos */}
            <h1 className="home-title">Bienvenido a TopStation - Venta de Videojuegos Online</h1>

            <p className="home-description">¡Encuentra los mejores videojuegos para tu consola PlayStation!</p>

            {/* Incluimos el carrusel de imágenes */}
            <Carousel />
            <p className="home-description">La tienda online de TopStation ofrece una amplia selección de productos, desde los últimos lanzamientos hasta joyas retro, así como accesorios exclusivos y mercancía de edición limitada. Pero lo que realmente distingue a TopStation es su compromiso con la comunidad de jugadores.</p>
        </div>
    );
}

export default Home;
