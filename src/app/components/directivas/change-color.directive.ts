import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  constructor(private el: ElementRef, private render: Renderer2) {
    // rendered:
    /*****
    
    ******/
    console.log(el);
  }
  // implementaer eventos en una directiva
  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.el.nativeElement, 'background', 'greenyellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background', 'hotpink');
  }
}
