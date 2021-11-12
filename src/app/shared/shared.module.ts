import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './pipes/name.pipe';



@NgModule({
  declarations: [NamePipe],
  imports: [
    CommonModule
  ],
  exports: [
    NamePipe
  ]
})
export class SharedModule { }
