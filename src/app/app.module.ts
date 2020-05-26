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
  ],
  imports: [BrowserModule, app_routes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
