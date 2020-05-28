import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styles: [],
})
export class Padre2Component implements OnInit {
  public valor: number = 0;

  constructor() {}

  ngOnInit(): void {}

  public sumar() {
    this.valor = this.valor + 1;
    this.valor;
  }

  public restar() {
    this.valor = this.valor - 1;
    this.valor;
  }

  public getvalor(valor: number) {
    this.valor = valor;
  }
}
