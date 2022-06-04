import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CargarScriptsService } from "./servicios/cargar-scripts.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
