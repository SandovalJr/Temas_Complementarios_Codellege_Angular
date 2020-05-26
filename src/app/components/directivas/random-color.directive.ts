import { Directive, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  private arrayColors: Array<string> = [
    'blue',
    'red',
    'greemyellow',
    'pink',
    'yellow',
    'orange',
  ];
  constructor(private el: ElementRef) {
    // console.log(el.nativeElement);
    this.ChangeColor();
  }
  public ChangeColor() {
    timer(0, 2000)
      .pipe(
        map(() => {
          let numeroAleatorio =
            Math.floor(Math.random() * (this.arrayColors.length - 0)) - 0;
          return this.arrayColors[numeroAleatorio];
        })
      )
      .subscribe((color) => (this.el.nativeElement.style.background = color));
  }
}
