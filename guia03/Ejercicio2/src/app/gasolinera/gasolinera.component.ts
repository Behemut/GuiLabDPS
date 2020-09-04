import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {
  unidades;
  cantidad:number;
  opcionSeleccionado:string;
  venta:number;

  registro_previo=[];
  preventas:any;


  constructor() { }

  ngOnInit() {
    this.unidades=["Diesel","Regular","Especial"];
    this.opcionSeleccionado="Selecciona";
    this.cantidad=0;
    this.venta=0;
  }
verificar(){
  if(this.cantidad>150){
  alert("La cantidad maxima es de 150 galones, automaticamente pasara la cantidad maxima permitida para venta")
  }
}
capturar(){
  if(this.cantidad>150){
    this.cantidad=150;
  }

  switch(this.opcionSeleccionado){
case 'Diesel':
this.venta= this.cantidad*3.96;
break;

case 'Especial':
this.venta=this.cantidad*4.25;
break;

case 'Regular':
this.venta = this.cantidad*4.05;
break;

  }

  this.preventas={"cantidad": this.cantidad, "tipo":this.opcionSeleccionado, "preventa":this.venta};
  this.registro_previo.push(this.preventas);
}





}
