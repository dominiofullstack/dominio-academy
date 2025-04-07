import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-com-divisores',
  standalone: true,
  imports: [],
  templateUrl: './titulo-com-divisores.component.html',
  styleUrl: './titulo-com-divisores.component.scss'
})
export class TituloComDivisoresComponent {

  @Input() titulo: string = '';
  @Input() destaque: string = '';

}
