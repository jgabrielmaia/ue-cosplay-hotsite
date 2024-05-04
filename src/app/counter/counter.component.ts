import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() followers: number = 0;
  @Input() quotation: number = 0;
  
  calculateMultiplication(): string {
    const mult = this.followers * this.quotation
    return mult.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

}

