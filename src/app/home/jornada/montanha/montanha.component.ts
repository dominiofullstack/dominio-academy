import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-montanha',
  standalone: true,
  imports: [],
  templateUrl: './montanha.component.html',
  styleUrl: './montanha.component.scss'
})
export class MontanhaComponent {

  @Input() cor?: string;
  @Input() altura?: number;
  @Input({transform: obterMetade}) largura?: number;

}

function obterMetade(value: number | undefined) {
  if (!value) {
    return 0;
  }
  return value / 2;
}
