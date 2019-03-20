import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
   // this.changeColor('red');

  }
  @HostBinding('style.border') border: string;
  @HostListener('click') onclick(){
    this.changeColor('blue');
    this.border = '20px solid green';
  }
   changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }
}
