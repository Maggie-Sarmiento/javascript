/**
 * Objetos - Valores y atributos d elos objetos
 */


let alumno = {
    nombre: "Maggie",
    edad: 28,
    suscriptor: false,
    ciudad: "lima"
}

// console.log(alumno)

// Quiero acceder a solo uno de los atrubutos
// 1 nomenclatura
console.log(alumno.ciudad)

// 2 nomenclatura
console.log(alumno["edad"])   // tiene que ser como cadena de texto


// Quiero oobtener todos los valores de mi objeto
let valores = Object.values(alumno)

console.log(valores)
// esto es util en ciertos casos particulares



let llaves = Object.keys(alumno)

console.log(llaves)

// si mi objeto esta vacio mi array estara vacio
let Arrayvacio = {
}

let datos = Object.keys(Arrayvacio)

console.log(datos)
// Si el array es un array vacio es un objeto vacio si el array es que el objeto es que tiene ese o esos atributo 