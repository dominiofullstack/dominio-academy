import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [],
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

}