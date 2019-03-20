import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  
  
  //Injecting services to use the directives
  constructor(private el: ElementRef, private renderer: Renderer) {
   // this.changeColor('red');

  }
  
  
  //using HostBinding() to capture the property of the Host Element
  @HostBinding('style.border') border: string;
  
  
  //using HostListener() to capture the event of the Host Element
  @HostListener('click') onclick(){
    this.changeColor('blue');
    this.border = '20px solid green';
  }
   changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color); //applying the directive
  }
}
