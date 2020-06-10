import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routes } from '../app/app.routes';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CheckExistImagePipe } from './components/pipes/check-exist-image.pipe';
import { CambiarContrasenaPipe } from './components/pipes/cambiar-contrasena.pipe';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { RandomColorDirective } from './components/directivas/random-color.directive';
import { ChangeColorDirective } from './components/directivas/change-color.directive';
import { ChangeColorInputDirective } from './components/directivas/change-color-input.directive';
import { PadreComponent } from './components/comunicacionComponentes/padre/padre.component';
import { Hijo1Component } from './components/comunicacionComponentes/hijo1/hijo1.component';
import { Padre2Component } from './components/comunicacionComponentes/padre2/padre2.component';
import { Hijo2Component } from './components/comunicacionComponentes/hijo2/hijo2.component';
import { PintarTablaDirective } from './components/directivas/pintar-tabla.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CheckExistImagePipe,
    CambiarContrasenaPipe,
    NgSwitchComponent,
    NgClassComponent,
    NavbarComponent,
    RandomColorDirective,
    ChangeColorDirective,
    ChangeColorInputDirective,
    PadreComponent,
    Hijo1Component,
    Padre2Component,
    Hijo2Component,
    PintarTablaDirective,
  ],
  imports: [BrowserModule, app_routes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
