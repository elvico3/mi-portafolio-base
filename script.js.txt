// 1. Definición de variables y arreglos (Arrays)
const saludos = [
    "¡Bienvenido! Estudiar cómo funciona internet es el primer paso.",
    "¡Hola! La lógica de programación se construye paso a paso.",
    "¡Excelente día! Git y la terminal ya forman parte de tu flujo."
];

// 2. Selección de elementos del DOM (Document Object Model)
const boton = document.getElementById("saludoBtn");
const output = document.getElementById("mensajeOutput");

let contadorClicks = 0; // Variable de estado

// 3. Creación de una función y uso de condicionales
function generarSaludoAleatorio() {
    contadorClicks++; // Incrementamos el bucle/contador
    
    // Condicional para cambiar el comportamiento según las veces que haga clic
    if (contadorClicks <= 3) {
        // Seleccionamos un mensaje aleatorio basado en el índice del arreglo
        const indiceAleatorio = Math.floor(Math.random() * saludos.length);
        output.textContent = saludos[indiceAleatorio] + ` (Clic #${contadorClicks})`;
    } else {
        output.textContent = "🚀 ¡Estás listo para avanzar a la Fase 1 y dominar el diseño web responsive!";
        boton.disabled = true; // Desactivamos el botón
        boton.style.opacity = "0.5";
    }
}

// 4. Escuchador de eventos (Event Listener)
boton.addEventListener("click", generarSaludoAleatorio);