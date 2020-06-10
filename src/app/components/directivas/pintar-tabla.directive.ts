import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appPintarTabla]',
})
export class PintarTablaDirective {
  private arrayColors: Array<string> = [
    'blue',
    'greemyellow',
    'red',
    'hotpink',
    'yellow',
    'orange',
    'green',
    'brown',
  ];
  constructor(private el: ElementRef, private render: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    let numeroAleatorio =
      Math.floor(Math.random() * (this.arrayColors.length - 0)) - 0;
    let color = this.arrayColors[numeroAleatorio];
    this.render.setStyle(this.el.nativeElement, 'background', `${color}`);
    this.colocarBoton();
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background', 'transparent');
    this.el.nativeElement.lastChild.remove();
  }

  public colocarBoton() {
    // Creo los elementos que voy a ocupar
    const td = this.render.createElement('td');
    const botonEliminar = this.render.createElement('button');
    const botonEditar = this.render.createElement('button');

    // TEXTOS
    const eliminarTXT = this.render.createText('eliminar');
    const editarTXT = this.render.createText('editar');

    // CLASES
    this.render.addClass(botonEliminar, 'btn');
    this.render.addClass(botonEditar, 'btn');

    this.render.addClass(botonEliminar, 'btn-outline-danger');
    this.render.addClass(botonEditar, 'btn-outline-warning');

    // PONGO EL TEXTO EN LOS BOTONES
    this.render.appendChild(botonEliminar, eliminarTXT);
    this.render.appendChild(botonEditar, editarTXT);

    // Le asigno a los td los botones que debe tener
    this.render.appendChild(td, botonEditar);
    this.render.appendChild(td, botonEliminar);

    // ABRO EL TD
    this.render.appendChild(this.el.nativeElement, td);
  }

}
