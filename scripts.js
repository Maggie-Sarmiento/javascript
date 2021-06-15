/**
 * FUNCIONES - FUNCIONES ANONIMAS
 */


// Almaceno una funcion en una variable sumar

let sumar = function (a, b, c) {
    return a + b + c
}

// Se ejecuta la funcion anonima porque se guardo en la variable sumar

// console.log(sumar(4, 5, 5)) // podriamos imprimirla en cosola

// o almacenarla en otra variable y posterior imprimirla ejecucion de sumar

     // let resultado = sumar(2, 4, 5)  

   // console.log(resultado) 

// Las funciones anonimas tambien nos sevirian para ser autoinvocadas

(function (a, b, c) {
    console.log(a + b + c)
} (2, 4, 5))

// Estoy declarando la función y al mismo tiempo ejecutando