import { CursosComponent } from './cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import{MeuPrimeiroComponent} from './meu-primerio/meu-primeiro.component';
import{MeuPrimeiro2Component} from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
innerWidth

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    CursosComponent,
    DataBindingComponent,
   

  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
