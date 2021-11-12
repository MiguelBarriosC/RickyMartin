import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesService } from './services/personajes.service';
import { ListPersonajesComponent } from './components/list-personajes/list-personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
//shared module
import { SharedModule } from 'src/app/shared/shared.module';
//Forms module
import { FormsModule } from '@angular/forms';
import { PersonajeSoloComponent } from './components/personaje-solo/personaje-solo.component';

@NgModule({
  declarations: [ListPersonajesComponent, PersonajeComponent, PersonajeSoloComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    PersonajesService
  ]
})
export class PersonajesModule { }
