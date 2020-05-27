import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [],
})
export class PadreComponent implements OnInit {
  public valorPadre;
  public imagen: string = '';

  constructor() {}

  ngOnInit(): void {}

  getValorPadre(valor: string) {
    // console.log(valor);

    this.valorPadre = valor;
  }
  public reunirEnergia(energiaCompleta) {
    if (energiaCompleta) {
      this.imagen = '../../../../assets//images/carro1.jpg';
    }
  }
}
