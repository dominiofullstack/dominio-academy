import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss'
})
export class ButtonDefaultComponent {

  @Input() text?: string;
  @Input() width?: number;
  @Input() estilo?: string = 'primario';
  @Output() onClick = new EventEmitter<void>();

  click(): void {
    this.onClick.emit();
  }

  getStyle() {
    if (this.width != null) {
      return { width: `${this.width}rem` };
    } else {
      return { width: '100%' };
    }
  }

}