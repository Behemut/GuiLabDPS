var Calculadora = /** @class */ (function () {
    function Calculadora(_operador1, _operador2) {
        this.operador1 = _operador1;
        this.operador2 = _operador2;
    }
    Calculadora.prototype.Suma = function () {
        var suma;
        suma = this.operador1 + this.operador2;
        return suma;
    };
    Calculadora.prototype.Resta = function () {
        var resta;
        resta = this.operador1 - this.operador2;
        return resta;
    };
    Calculadora.prototype.Multiplicacion = function () {
        var multp;
        multp = this.operador1 * this.operador2;
        return multp;
    };
    Calculadora.prototype.Division = function () {
        var division;
        if (this.operador2 == 0) {
            console.log("No es posible realizar esta operacion");
            return 0;
        }
        else {
            division = this.operador1 / this.operador2;
            return division;
        }
    };
    return Calculadora;
}());
var Operacion1 = new Calculadora(10, 2);
console.log("Los resultados de la operacion fueron:  " + '\n' + " Suma : " + Operacion1.Suma()
    + '\n' + " Resta : " + Operacion1.Resta()
    + '\n' + " Multiplicacion : " + Operacion1.Multiplicacion()
    + '\n' + " Division : " + Operacion1.Division());
var Operacion2 = new Calculadora(10, 0);
console.log("Los resultados de la operacion fueron:  " + '\n' + " Suma : " + Operacion2.Suma()
    + '\n' + " Resta : " + Operacion2.Resta()
    + '\n' + " Multiplicacion : " + Operacion2.Multiplicacion()
    + '\n' + " Division : " + Operacion2.Division());
