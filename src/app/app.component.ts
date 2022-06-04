import { Component } from '@angular/core';
import { CargarScriptsService } from "./servicios/cargar-scripts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MablinWebsite';
  
  constructor( private _CargarScripts : CargarScriptsService ){
    _CargarScripts.Carga(["main"]);
    _CargarScripts.Carga(["swiper-bundle.min"]);
  }
}
