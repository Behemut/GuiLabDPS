import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GasolineraComponent } from './gasolinera/gasolinera.component';





@NgModule({
  declarations: [
    AppComponent,
    GasolineraComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
