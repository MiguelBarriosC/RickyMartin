import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonajesComponent } from './components/list-personajes/list-personajes.component';
import { PersonajeSoloComponent } from './components/personaje-solo/personaje-solo.component';


const routes: Routes = [
  { path:'', component:ListPersonajesComponent },
  { path:':id', component:PersonajeSoloComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
