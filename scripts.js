/**
 * SCOPE
 */

// El Scope es el alcance que tienen ciertos datos en este caso el de las variables
/*  let nombre = "Alexys"
 nombre = "Juan"  // variable nombre tiene alcance global a fuera de la función

function saludar(nombre) {
    let nombre = "Beto"   // Esta variable solo existe dentro de la función
    console.log(`Hola ${nombre}`)
}

saludar() */


let nombre = "Alexys"
nombre = "Juan"  // variable nombre tiene alcance global a fuera de la función

const saludar = function() {
   let nombre = "Beto"   // Esta variable solo existe dentro de la función y asi se deben de manejar
   console.log(`Hola ${nombre}`)
}

saludar()
console.log(nombre)

// Cuando tenemos muchas funciones podemos estar adectando variables que no deberian
// Las funciones deberian afectar solo variables que vivan dentro de la funcion

// Mejor si no se usan las variables globales y en su lugar usar constantes


const NOMBRE = "Carlos"

const saludo = function() {
//    NOMBRE = "Pedro"  // error de asignacion de un valor a una constante
    const NOMBRE = "Pedro"  // Esto es el scope, el valor que estoy declarando solo va a vivir dentro de la funcion
    console.log(`Hola ${NOMBRE}`)
}

saludo()
console.log(NOMBRE)

// en este caso como no se puede hacaer una reasignacion, no me preocupo, y se que cuando yo imprima NOMBRE  se que el valor no va a cambiar

