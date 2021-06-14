/**
 * FUNCIONES - Parámetros
 */

// Declaración de mi función saludar

function saludar(nombre) {
    if (typeof nombre === "string"){
        console.log(`Hola ${nombre}, muy buenos días`)
    } else {
        console.log("Error de tipo de dato")
    }
}



//Llamado a la función saludar
saludar(550)

