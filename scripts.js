/**
 * Filter
 */

// Filter (filtrar contenido)

/* let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let nuevoArray = []
numeros.map(num => {
    if (num > 20) {
        nuevoArray.push(num)
    }
})

console.log(nuevoArray)
console.log(numeros) */

// Aplicando filter
let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let dato = numeros.filter(num => num > 20)

console.log(dato)
