/**
 * ARRAYS - Metodos que no modifican el array
 */

// let amigos = []
let amigos = ["Diana", "Roberto", "Valentina", "Susana"]
console.log(amigos)

// Partir nuestro arrays en dos arrays
let dato = amigos.slice(0, 2)

console.log(dato)
console.log(amigos)

// Hay metodos que modifican el array (ej. push y pop), hay otros como slice que no los modifican y en su lugar nos devuelven un nuevo arreglo