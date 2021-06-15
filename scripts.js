/**
 * Arrays - Ciclos
 */

// Find, includes, some, every


// FIND
/* let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let dato = numeros.find(num => num%2 === 1)

console.log(dato) */
// Find devuelve el primer dato que cumple la condicion o validación


// INCLUDES
/* let numeros2 = [10, 436, 45, 74, 33, 9, 2, 54]

let dato2 = numeros2.includes(35)

console.log(dato2) */
// includes no me devuelve un dato me devulve un boolean true o false


// SOME
// some me va a permitir comprobar si al menos un elemnto de mi array cumple con una condicion
/* let numeros3 = [10, 436, 45, -74, 33, 9, 2, 54]

let dato3 = numeros3.some(num => num < 0)

console.log(dato3) */
// con some estoy pudiendo hacer una ocmpraración, con include no podia hacer la comparacion 
// con some hace la comparación y si alguno d elos valores cumple la condicion devuelve true si no me devuelve flase
// Funciona tambien con un string 

/* let numeros3 = [10, 436, 45, "Maggie", 33, 9, 2, 54]

let dato3 = numeros3.some(num => typeof num === "string")

console.log(dato3) */
// No me dice cual pero con esto se que dentro de mi array se que hay un dato que es string 



// EVERY
let numeros3 = [10, 436, 45, "Maggie", 33, 9, 2, 54]

let dato3 = numeros3.every(num => typeof num === "string")

console.log(dato3)
// Le estamos preguntando si todos los elementos son string
// con every hago una comparación y se valida con true, si uno no cumple no se valida y seria false
