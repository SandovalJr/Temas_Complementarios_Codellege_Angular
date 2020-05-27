import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appChangeColorInput]',
})
export class ChangeColorInputDirective {
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

  // implementaer eventos en una directiva
  @HostListener('keypress') onkeypress() {
    let numeroAleatorio =
      Math.floor(Math.random() * (this.arrayColors.length - 0)) - 0;
    let color = this.arrayColors[numeroAleatorio];

    this.render.setStyle(this.el.nativeElement, 'color', color);
    this.render.setStyle(this.el.nativeElement, 'border', `${color} 5px solid`);
  }
}
