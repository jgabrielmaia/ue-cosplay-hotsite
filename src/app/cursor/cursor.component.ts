import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEnterListener]'
})
export class CursorDirective {
  @Input() followers: number = 0;  
  mouseY: number = 0;
  mouseX: number = 0;
  moveTimer:any; 
  cursorClass: string = 'plate move';

  updatePosition(x: number, y: number) {
    this.mouseX = x;
    this.mouseY = y;
  }

  @HostListener('document:mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.updatePosition(event.clientX, event.clientY);
    clearTimeout(this.moveTimer);
    this.cursorClass = 'plate move';

    this.moveTimer = setTimeout(() => {
      this.cursorClass = 'plate idle';
    }, 200);
  }
}
