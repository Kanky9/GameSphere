import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-de-dados',
  templateUrl: './juego-de-dados.component.html',
  styleUrls: ['./juego-de-dados.component.css']
})
export class JuegoDeDadosComponent implements OnInit {

  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string = "";
  
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();

  }

  /*Math.trunc lo que hace esta función es eliminar la parte decimal*/
  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }
  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Gano';
    }
    else {
      this.resultado = 'Perdio';
    }
  }
  ngOnInit() {
    
  }
}