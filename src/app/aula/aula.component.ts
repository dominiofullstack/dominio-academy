import { Component } from '@angular/core';
import { ListaAulasComponent } from "./lista-aulas/lista-aulas.component";

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [ListaAulasComponent],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {

}
