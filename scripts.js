/**
 * ForEach vs Map
 */

// Corrección del tema anterior
/* let amigos = ["Diana", "Roberto", "Valentina", "Susana"]

let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))
console.log(dato) */

// Si imprime array con el saludo por cada amigo, pero no almacena el tamaño dado que forEach no funciona asi

// El metodo .map() me permite modificar un arreglo 
let amigos = ["Diana", "Roberto", "Valentina", "Susana"]

let dato = amigos.map(amigo => `Hola ${amigo}`)
console.log(amigos)
console.log(dato)

// .map tine la misma funcionalidad de forEach pero tiene la cualidad de devolver un nuevo array nuevecito
// Usar for each siempre y cuando este seguro de no necesitar almacenar el nuevo array generado
//.map te devuelve un nuevo array y se mantiene el aray original
