/**
 * ARRAYS - Ciclos
 */

// let amigos = []
let amigos = ["Diana", "Roberto", "Valentina", "Susana"]

// console.log(amigos)

/* for (let i = 0; i < amigos.length; i++){
    console.log(amigos[i])
} */

// los arrays ya traen metodos para hacer recorridos de una manera más optima
// For each (para cada elemento) necesita como parametro una funcion

/* amigos.forEach(function(amigo){
    console.log(amigo)
})
 */

amigos.forEach(amigo => console.log(amigo))

/* let dato = amigos.forEach(amigo => console.log(amigo))
console.log(dato) */

// El metodo forEch no devuelve nada

/* let dato = amigos.forEach(amigo => `Hola ${amigo}`)
console.log(dato) // Tampoco devueve nada */

// La finalidad de forEach es simplemente hacer algo con los elementos