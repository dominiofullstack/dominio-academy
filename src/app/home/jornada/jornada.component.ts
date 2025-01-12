import { Component } from '@angular/core';
import { JornadaCursosComponent } from "./jornada-cursos/jornada-cursos.component";
import { TrilhaDeEstudoComponent } from "./trilha-de-estudo/trilha-de-estudo.component";

@Component({
  selector: 'app-jornada',
  standalone: true,
  imports: [JornadaCursosComponent, TrilhaDeEstudoComponent],
  templateUrl: './jornada.component.html',
  styleUrl: './jornada.component.scss'
})
export class JornadaComponent {

}
