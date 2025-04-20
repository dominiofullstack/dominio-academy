import { Component } from '@angular/core';
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [ButtonDefaultComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

}
