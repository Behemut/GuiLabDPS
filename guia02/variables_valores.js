var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var full_nombre = "jorge cano";
var age = 27;
var developer = true;
//Arreglo de variables tipo String con objetos predefinidos   Array<String>
var skills = ['Javascript', 'TypeScript', 'Angular'];
//Forma opcional de declarar Array<>
var numberArray = [123, 334, 122, 445];
/*Los Enumerables son objetos que enumeran los elementos dentro de él. Se usa
principalmente para definir roles o configuraciones y evitar el uso de constantes.*/
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 0] = "Employee";
    ROLE[ROLE["Manager"] = 1] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 3] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
//Funcion que no recibe nada y no devuelve parametros
function hello() {
}
//Funcion que recibe entrada pero no devuelve nada
function setName(name) {
}
//Funcion que retorne un dato del tipo string y que reciba 2 parametros del tipo string como entrada
function NombreCompleto(name, surName) {
    return "string";
}
/*  Funcion que recibe var nombre
function setName(name:string):string{
var variableInterna:string = "Uriel";
return "Hola" + name;
}*/
var variableExterna = "Uriel";
/*function setName(name:string):string{
    //Accedemos a la variable externa usando "this"-->  this.variableExterna= name:
return "Hola" + name;
}
*/
//Objetos en Typescript
var Persona = /** @class */ (function () {
    function Persona(_first_name, _last_name) {
        this.first_name = "_first_name";
        this.last_name = "_last_name";
    }
    return Persona;
}());
var personaUno = new Persona();
var personaDos = new Persona("Jorge");
var personaTres = new Persona("Jorge", "Cano");
var personaUno_enInterface = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_account: '@jorgeucano'
};
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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet");
    return Greeter;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
