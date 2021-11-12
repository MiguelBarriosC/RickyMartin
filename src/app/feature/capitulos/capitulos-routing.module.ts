import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapituloSoloComponent } from './components/capitulo-solo/capitulo-solo.component';
import { ListCapitulosComponent } from './components/list-capitulos/list-capitulos.component';


const routes: Routes = [
  { path:'', component:ListCapitulosComponent },
  { path:':id', component:CapituloSoloComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitulosRoutingModule { }
