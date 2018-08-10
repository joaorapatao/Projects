import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
  ], providers:[CursosService]
})
export class CursosModule { 
  
}
