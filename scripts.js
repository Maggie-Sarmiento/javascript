/**
 * CONDICIONALES MULTIPLES SWITCH
 */

 /**
  * Que personaje de Dragon ball eres
  * Si eres fuerte y comelon eres Goku
  * Si eres veloz y egoista eres Vegueta
  * Si eres pequeño y debil eres Krilin
  * Si eres travieso y juegueton eres Trons
  * Si no eres ninguno eres una sabandija
  */


let personalidad = "Travieso y gordo"

switch (personalidad) {
    case "Fuerte y comelón":
        console.log("Eres Goku")
        break
    case "Veloz y egoista":
        console.log("Eres Vegueta")
        break
    case "Pequeño y debil":
        console.log("Eres Krilin")
        break
    case "Travieso y jugueton":
        console.log("Eres Trons")
        break
    default:
        console.log("Eres una sabandija")
}