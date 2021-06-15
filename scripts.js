/**
 * FUNCIONES - FUNCIONES DE PRIMERA CLASE
 */

// Funciones como ciudadano de primera clase: Término que suena 
// totalmente exagerado para describir una característica de ciertos 
// lenguajes de programación. Cuando algo puede ser ciudadano de primera 
// clase, se refiere a que es un valor que puede ser asignado a variables, 
// pasado como parámetro o devuelto como resultado en una función.

// En lenguajes como Java, estos valores son los tipos de datos: int, 
// double, String, Object, etc. Y como son de primera clase, no es raro 
// verlos aplicados de esa manera en todas partes en el código: int x = 1 
// x es una variable de tipo entero 

// Los lenguajes que permiten que las funciones sean de primera clase no 
// tienen problema en que las funciones sean usadas justo como cualquier 
// otro tipo de datos. como es el caso de C# y Javascript

// En javascript al ser las funciones tratadas como ciudadanos de primera clase
// pueden manipularse de la misma manera que una entidad como boolean como string 
// como number las cuales a su vez tambien son entidades de primera clase

function obtenerNombreCompleto(nombre, apellidos) {
//    let nombreCompleto = `${nombre} ${apellidos}`
//    return nombreCompleto
    return `${nombre} ${apellidos}`
}


/**
* Entonces, una función se considera de primera clase porqué puede ser almacenada en 
* una variable, enviada cómo argumento a otra función y ser devuelta por una función.
*/

function ejemplo() {
    return "Soy una función de primera clase";
   }
   //1er punto. La almacenamos para luego ejecutarla con su nueva referencia:
   let f_primera_clase = ejemplo;
   console.log("1er punto: ", f_primera_clase());
   
   //2do punto. La enviamos como argumento a otra función.
   function uso_otra_funcion(funcion) {
    return funcion();
   }
   console.log("2do punto: ", uso_otra_funcion(ejemplo));

let nombreCompleto = obtenerNombreCompleto("Carlos", 256)

function primera_funcion() {
    console.log("primera función")
    return function ejemplo() {
      return "Soy un función devuelta y definida dentro de otra";
    };
   }
   f_primera_clase = primera_funcion();
   console.log("3er punto: ", f_primera_clase());



