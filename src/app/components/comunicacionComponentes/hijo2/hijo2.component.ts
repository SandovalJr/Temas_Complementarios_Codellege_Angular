import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styles: [],
})
export class Hijo2Component implements OnInit {
  @Input() ValorPadre_Hijo: number;
  @Output() multi = new EventEmitter<number>();
  @Output() divi = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public multiplicacion(valor: number) {
    valor = valor * valor;
    this.multi.emit(valor);
  }
  public division(valor: number) {
    valor = valor / valor;
    this.divi.emit(valor);
  }
}
