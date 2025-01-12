import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() id?: string;
  @Input() type?: string;
  @Input() label?: string;
  @Input() placeholder?: string;

}
