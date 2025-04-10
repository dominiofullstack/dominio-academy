import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacao-list',
  standalone: true,
  imports: [],
  templateUrl: './formacao-list.component.html',
  styleUrl: './formacao-list.component.scss'
})
export class FormacaoListComponent {

  @Input() margin?: number;

}
