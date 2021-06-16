/**
 * Math y Date
 * MATH nos permite tener valores matematicos y DATE valores de fecha
 */


// MATH quiero obtener un numero aleatorio entre 1 y 10
/* const valor = Math.random()*10
console.log(valor) */

// necesito el valor de Pi
/* const valor = Math.PI
console.log(valor) */
// en Math se encuentran algunos valores matematicos que ya vienen incluidos en el lenguaje

// tambien puedo utilizar metodos max min sen cos etc
const valor = Math.max(50, 2, 26, 88)
console.log(valor)


// DATE
/* const value = new Date()
console.log(value.getMinutes()) */
// podemos manipular las fechas e incluso el valor que quiero imprimir 
const value = new Date()
console.log(value.getUTCDate())
