// En src/services/util.js

// Función para guardar un usuario (simulación de llamada a la API)
export const saveUser = async (userData) => {
    try {
        // Aquí podríamos realizar una llamada a la API para guardar el usuario en el servidor
        console.log('Guardando usuario:', userData);
        // Simulamos una demora de 1 segundo para simular una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Usuario guardado con éxito');
    } catch (error) {
        console.error('Error al guardar usuario:', error);
        throw error;
    }
};