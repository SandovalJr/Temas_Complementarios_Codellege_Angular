import { Routes, RouterModule } from '@angular/router';

// Import components
import { NgClassComponent } from '../app/components/directivas/ng-class/ng-class.component';
import { NgSwitchComponent } from '../app/components/directivas/ng-switch/ng-switch.component';
import { PipesComponent } from '../app/components/pipes/pipes.component';
const rutas: Routes = [
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngSwitch', component: NgSwitchComponent },
  { path: 'Pipes', component: PipesComponent },

];

export const app_routes = RouterModule.forRoot(rutas);
