import { Component, HostListener, Input } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [DecimalPipe, NgClass],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css'
})
export class CursorComponent {
  @Input() followers: number = 0;  
  mouseY: number = 0;
  mouseX: number = 0;
  moveTimer:any; 
  cursorClass: string = 'plate move';

  updatePosition(x: number, y: number) {
    this.mouseX = x;
    this.mouseY = y;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.updatePosition(event.clientX, event.clientY);
    clearTimeout(this.moveTimer);
    this.cursorClass = 'plate move';

    this.moveTimer = setTimeout(() => {
      this.cursorClass = 'plate idle';
    }, 200);
  }
}
