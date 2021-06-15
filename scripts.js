/**
 * FUNCIONES FLECHA - arrow functions
 *   =>
 */

// funcion normal anonima almacenada en una constante
/* const sumar = function(a, b) {
    return a + b
}

const restar = function(c, d) {
    return c - d
}

console.log(sumar(10, 5))
console.log(restar(5, 1)) */



// Aplicando las funciones flecha 
const sumar = (a, b) => a + b    // Esta funcion esta almacenada en una constante que recibe dos parametros y retorna la suma de los mismos
const restar = (c, d) => c - d

console.log(sumar(15, 5))
console.log(restar(10, 1))


// Otra aplicación de las funciones flecha
const saludar = nombre => `Hola ${nombre} buenos dias`  // Cuando las funciones flecha estan recibiendo solo un parametro omitimos los parentesis
console.log(saludar("Maggie Sarmiento"))

// const saludar = () => `Hola ${nombre} buenos dias` // Si nuestra funcion no necesita parametros si requiere parentesis, si es más de un parametro se pone entre parentesis y se separa con comas


// como validar que un dato sea un string para determinada funcion flecha

const saludar2 = nombre => {
    if(typeof nombre === "string"){
        return `Hola ${nombre} buenos dias`
    } else {
        console.error("Tipo de dato equivocado")
    }
}

console.log(saludar2(256))

// Si necesito escribir codigo en una funcion flecha abro parentesis y ahi mismo escribir el return
// Mientras mas pequeñas las funciones mejor
// Si es una funcion muy grande buscar dividirlas en mas pequeñas

// forma simplificada de validar una funcion flecha sencilla

const saludar3 = nombre => typeof nombre === "string" ? `Hola ${nombre}` : "Paramentro no valido."
console.log(saludar3(850))
