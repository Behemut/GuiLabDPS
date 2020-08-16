var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
    }
    Empleado.prototype.CalcularDeducciones = function () {
        var deduccion_salariales;
        if (this.salario >= 500 && this.salario <= 800) {
            deduccion_salariales = this.salario - (this.salario * 0.10);
        }
        if (this.salario >= 801 && this.salario <= 1000) {
            deduccion_salariales = this.salario - (this.salario * 0.15);
        }
        if (this.salario < 500) {
            deduccion_salariales = this.salario;
        }
        return deduccion_salariales; //Retorno del area calculado
    }; //fin de metodo
    return Empleado;
}()); //Fin de clase
var Empleado1 = new Empleado('Kevin', 525);
console.log("El empleado " + Empleado1.nombre + " recibira un salario neto de " + Empleado1.CalcularDeducciones());
var Empleado2 = new Empleado('Carlos', 880);
console.log("El empleado " + Empleado2.nombre + " recibira un salario neto de " + Empleado2.CalcularDeducciones());
