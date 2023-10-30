import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  @Input() valor: number = 0;

  constructor() {
    
  }

  ngOnInit() {
    
  }

}
