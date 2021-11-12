import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  exports: [
    FeatureComponent,
  ]
})
export class FeatureModule { }
