import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {
//Variables
  registro=[];
  empleados:any;
  nombre:string;
  sueldo_b: number;
  sueldo_n:number;
     isss:number;
    renta:number;
    afp:number;
    contador:number;
  constructor() { }

  ngOnInit() {
    this.nombre="";
    this.sueldo_b=0;
    this.sueldo_n=0;
    this.isss=0;
    this.renta=0;
    this.afp=0;
    this.contador=0;
  }

ProcDescuentos(){
this.isss= (this.sueldo_b*7.3/100);
this.renta=  (this.sueldo_b*11/100);
this.afp=  (this.sueldo_b*5.1/100);
this.sueldo_n = this.sueldo_b - this.isss -this.renta - this.afp;
this.empleados={"nombre":this.nombre, "sueldo_bruto": this.sueldo_b, "isss":this.isss, "renta": this.renta, "afp":this.afp,"sueldo_neto":this.sueldo_n}
this.registro.push(this.empleados);
this.contador++;
   }


}
