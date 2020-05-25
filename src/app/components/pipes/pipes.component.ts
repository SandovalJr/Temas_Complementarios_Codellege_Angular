import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [],
})
export class PipesComponent implements OnInit {
  public valor: number = 123456;
  public fecha: Date = new Date();
  public ValorPi: number = 0;
  public texto = 'SaDoVaL';
  public porcentaje = 0.12;
  public arregloNumerico: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public contrasenaBienDificil: string = '123456';
  public show: boolean = false;
  public urlImage = './../../../assets/images/carro1.jpg';
  public n1 = 15;
  public n1multiplicado = 2;
  public r = 0;

  constructor() {
    this.ValorPi = Math.PI;
    this.r = this.n1 * this.n1multiplicado;
  }

  ngOnInit(): void {}

  MostrarContrasena() {
    this.show = !this.show;
  }
}
