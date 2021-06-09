/**
 * TYPE COERCION  capacidad de convertir un dato en otro tipo de dato
 */

 let a = 521 
 let b = "422"


//let resultado = a + b  //convierte todo a String por + (O aritmetico) que es de concatenacion

//let resultado = a - b

 // console.log(typeof resultado)

 let c = 521
 let d = "perro"

//let resultado = c - d
//console.log(resultado)

// NaN => Not  number // Por el operador - lo reconoce como numero auqneu el resultado no lo sea

let e = true
let f = false

let resultado = e + f
console.log(resultado) // El operador + busca que sea cadena de texto, luego se da cuenta que quieres hacer una operacion

// true vale 1 por eso de resultado da 2  los suma a peasar de que son booleanos