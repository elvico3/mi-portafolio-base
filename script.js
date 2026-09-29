// 1. Selección de elementos del DOM
const boton = document.getElementById("saludoBtn");
const output = document.getElementById("mensajeOutput");

// Cambiamos el texto del botón dinámicamente desde JavaScript
boton.textContent = "Consultar servidor externo (API)";

// 2. Función asíncrona (nota la palabra clave 'async')
async function obtenerDatoExterno() {
    try {
        // Estado de carga mientras esperamos al servidor
        output.textContent = "⏳ Conectando con la API...";
        boton.disabled = true; // Desactivamos el botón para evitar múltiples clics

        // 3. Uso de 'fetch' y 'await' para hacer la petición HTTP a internet
        // Usamos una API pública y gratuita que genera consejos (advices)
        const respuesta = await fetch("https://api.adviceslip.com/advice");
        
        // 4. Convertimos la respuesta cruda del servidor a formato JSON
        const datos = await respuesta.json();

        // 5. Inyectamos el dato extraído en el DOM
        output.textContent = `📡 Respuesta del servidor: "${datos.slip.advice}"`;
        
    } catch (error) {
        // Manejo de errores en caso de que falle el internet o el servidor
        output.textContent = "❌ Error al conectar con el servidor.";
        console.error(error);
    } finally {
        // Esta sección se ejecuta siempre, haya error o éxito
        boton.disabled = false; 
    }
}

// 6. Escuchador de eventos
boton.addEventListener("click", obtenerDatoExterno);