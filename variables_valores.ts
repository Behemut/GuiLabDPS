var full_nombre:string ="jorge cano";
var age:number=27;
var developer:boolean = true;

//Arreglo de variables tipo String con objetos predefinidos   Array<String>
var skills:Array<String> =['Javascript','TypeScript','Angular']
//Forma opcional de declarar Array<>
var numberArray:number[] =[123,334,122,445];
/*Los Enumerables son objetos que enumeran los elementos dentro de él. Se usa
principalmente para definir roles o configuraciones y evitar el uso de constantes.*/
enum ROLE {Employee, Manager, Admin, Developer}

var role:ROLE = ROLE.Employee
//Funcion que no recibe nada y no devuelve parametros
function hello():void{
}
//Funcion que recibe entrada pero no devuelve nada
function setName(name:string):void{
}
//Funcion que retorne un dato del tipo string y que reciba 2 parametros del tipo string como entrada
function NombreCompleto(name:string, surName:string):string{
return "string";
}
/*  Funcion que recibe var nombre
function setName(name:string):string{
var variableInterna:string = "Uriel";
return "Hola" + name;
}*/
var variableExterna:string="Uriel";
/*function setName(name:string):string{
    //Accedemos a la variable externa usando "this"-->  this.variableExterna= name:
return "Hola" + name;
}
*/

//Objetos en Typescript

class Persona{
    first_name:string;
    last_name:string;

    constructor(_first_name?:string, _last_name?:string){
        this.first_name = "_first_name";
        this.last_name = "_last_name";
    }
/*Parametros opcionales en un constructor
Sin embargo podemos tener parámetros obligatorios u opcionales, los opcionales que se
distinguen por tener un “?”.*/
}

let personaUno = new Persona();
let personaDos = new Persona("Jorge");
let personaTres = new Persona("Jorge", "Cano");

/*
Interpolation es la forma en que mezclamos variables justo con los strings. Acompañado de
comillas francesas, podemos acceder al valor de una variable de forma directa desde ese
string. Ejemplo:
var a:string = "Uriel";
var b = `Saludos a ti ${this.a},`; 

Otra de las ventajas de usar las comillas francesas es que respeta cada espacio y cada salto
de línea que insertamos, tal como un template:

getSaludo():string{
let emojis = '(⌐■_■)';
return`Saludos
${this.last_name}, ${this.first_name}
Le enviamos un saludo desde la consola!
${emojis}
`;
}
*/

/*Interfaces
A diferencia de las Clases, las interfaces no se instancian mediante constructores, si no
mediante un objeto JSON. Tienen la palabra reservada interface.*/

interface MyPersona{
    first_name:string;
    last_name:string;
    twitter_account?:string;
}

let personaUno_enInterface:MyPersona={
    first_name:'Jorge',
    last_name:'Cano',
    twitter_account: '@jorgeucano'
}

/*Decorators
Los decorators son algo que se usan mucho en Angular pero que también que también
tenemos en TypeScript. Los decorators nos permiten agregar una funcionalidad extra a algo,
como por ejemplo a métodos o miembros de una clase. La estructura más simple de un
decorator es:*/


/*Function color(value:string){ //Asi definimos el decorator
fabric return function(target){
    // Este es el decorator, prácticamente regresamos una una función con la funcionalidad, se pide el objetivo
// Aquí es donde modificamos el objetivo con el valor pedido desde el decorator
}
}*/
//Ejemplo de un decorator

class Greeter{
    greeting: string;
    constructor(message:string){
        this.greeting= message;
    }
    @enumerable(false)
    greet(){
        return "Hey " + this.greeting;

    }  
}

function enumerable(value:boolean){
    return function (target: any, propertyKey:string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    };
}
let gree = new Greeter("Soy el mensaje");

console.log(gree.greet());