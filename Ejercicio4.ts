class Calculadora {
    operador1:number;
    operador2:number;

constructor(_operador1:number, _operador2:number){
this.operador1 = _operador1;
this.operador2 = _operador2;
}

Suma():number{
var suma;
suma = this.operador1 + this.operador2;
return suma;
}
Resta():number{
var resta;
resta = this.operador1 - this.operador2;
return resta;
}

Multiplicacion():number{
var multp;
multp = this.operador1 * this.operador2;
return multp;
}

Division():number{
var division;
if (this.operador2 ==0){
return null;
console.log("No es posible realizar esta operacion");
}
else{
    division= this.operador1 / this.operador2;
    return division;
    }
}
}

let Operacion1= new Calculadora(10,2);
console.log("Los resultados de la operacion fueron:  " + '\n' + " Suma : " + Operacion1.Suma()
+ '\n' + " Resta : " + Operacion1.Resta()
+ '\n' + " Multiplicacion : " + Operacion1.Multiplicacion()
+ '\n' + " Division : " + Operacion1.Division());

let Operacion2= new Calculadora(10,0);
console.log("Los resultados de la operacion fueron:  " + '\n' + " Suma : " + Operacion2.Suma()
+ '\n' + " Resta : " + Operacion2.Resta()
+ '\n' + " Multiplicacion : " + Operacion2.Multiplicacion()
+ '\n' + " Division : " + Operacion2.Division());