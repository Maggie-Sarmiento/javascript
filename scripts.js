/**
 * FUNCIONES - Valores de retorno 
 */

// Declaración de mi función saludar

// function saludar(nombre) {
//     if (typeof nombre === "string"){
//         console.log(`Hola ${nombre}, muy buenos días`)
//     } else {
//         console.log("Escriba un nombre correcto")
//     }
// }


function obtenerNombreCompleto(nombre, apellidos) {
//    let nombreCompleto = `${nombre} ${apellidos}`
//    return nombreCompleto
    return `${nombre} ${apellidos}`
}

let nombreCompleto = obtenerNombreCompleto("Carlos", 256)

console.log(nombreCompleto)

