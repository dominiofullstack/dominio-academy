import { Component } from '@angular/core';
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [ButtonDefaultComponent],
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.scss'
})
export class ListaCursosComponent {

}
