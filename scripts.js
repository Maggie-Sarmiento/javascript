/**
 * CONDICIONALES
 */

 /**
  * Invitación a una fiesta
  * Si eres mayor de edad y menor de 65 años puedes venir a la fiesta
  * sino, si tienes permiso firmado por tus padres, puedes venir
  * sino por favor quedate en casa
  */


let persona = "Juan Alexis"
let edad = 80 // La condicional no se cumple 
let permiso = false

if (edad > 18 && edad < 65) {
   console.log(`${persona} puedes venir a la fiesta`)
} else if (permiso === true && edad < 18) {
    console.log(`Puedes venir ${persona} tienes permiso`)
} else {
    console.log(`${persona} quedate en casa`)
}

// if
// if else
// if else if
