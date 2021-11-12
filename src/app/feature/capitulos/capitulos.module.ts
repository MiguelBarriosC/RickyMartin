import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitulosRoutingModule } from './capitulos-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { CapitulosService } from './services/capitulos.service';
import { ListCapitulosComponent } from './components/list-capitulos/list-capitulos.component';
import { CapituloComponent } from './components/capitulo/capitulo.component';

//Shared module
import { SharedModule } from 'src/app/shared/shared.module';
//Forms module
import { FormsModule } from '@angular/forms';

import { CapituloSoloComponent } from './components/capitulo-solo/capitulo-solo.component';

@NgModule({
  declarations: [ListCapitulosComponent, CapituloComponent, CapituloSoloComponent],
  imports: [
    CommonModule,
    CapitulosRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CapitulosService
  ]
})
export class CapitulosModule { }
