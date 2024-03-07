// En src/pages/About/About.js

import React from 'react';

const About = () => {
    return (
        <div>
            <h2>Acerca de TopStation</h2>
            <p>TopStation es tu tienda online de confianza para comprar los mejores videojuegos para tu consola PlayStation.</p>
            <p>Nuestro equipo está comprometido en proporcionarte la mejor experiencia de compra de videojuegos en línea.</p>
            <p>No dudes en contactarnos si tienes alguna pregunta o necesitas ayuda:</p>
            <ul>
                <li>Correo Electrónico: info@topstation.com</li>
                <li>Teléfono: +1234567890</li>
                <li>Dirección: Av. Juan Carlos I 123, Jerez, España</li>
                <li>Redes Sociales:
                    <ul>
                        <li>Twitter: <a href="https://twitter.com/topstation">TopStation</a></li>
                        <li>Facebook: <a href="https://facebook.com/topstation">TopStation</a></li>
                        <li>Instagram: <a href="https://instagram.com/topstation">TopStation</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default About;