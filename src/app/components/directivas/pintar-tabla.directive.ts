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

    const td = this.render.createElement('td');
    const texto = this.render.createText('que pedo si jale');
    this.render.appendChild(td, texto);

    this.render.appendChild(this.el.nativeElement, td);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background', 'transparent');
  }
}
