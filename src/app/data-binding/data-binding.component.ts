import { Component, OnInit, Input } from '@angular/core';
import { KeyedRead, KeyedWrite } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  constructor() { }

  valorAtual: string;
  valorSalvo: any;
  itemsearch: string;

  ngOnInit() { }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  // botaoClicado(){
  // alert("Botão clicado!");
  // }
  oneKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);


  }

}
