import { Routes, RouterModule } from '@angular/router';

// Import components
import { NgClassComponent } from '../app/components/directivas/ng-class/ng-class.component';
import { NgSwitchComponent } from '../app/components/directivas/ng-switch/ng-switch.component';
import { PipesComponent } from '../app/components/pipes/pipes.component';
import { Hijo1Component } from '../app/components/comunicacionComponentes/hijo1/hijo1.component';
import { PadreComponent } from '../app/components/comunicacionComponentes/padre/padre.component';
import { Padre2Component } from '../app/components/comunicacionComponentes/padre2/padre2.component';
const rutas: Routes = [
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngSwitch', component: NgSwitchComponent },
  { path: 'Pipes', component: PipesComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'padre2', component: Padre2Component },
];

export const app_routes = RouterModule.forRoot(rutas);
