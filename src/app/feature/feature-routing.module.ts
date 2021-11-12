import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  { path:'', component: FeatureComponent, pathMatch:'full' },
  {
    path: 'capitulos',  
    loadChildren: () => import('./capitulos/capitulos.module').then(m => m.CapitulosModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
