
import { ROUTES } from './data-binding/app.routs';
import { RouterModule } from '../../node_modules/@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
innerWidth

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ApresentacaoComponent
   

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
