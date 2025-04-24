import { Component } from '@angular/core';
import { NavbarSearchComponent } from "../shared/navbar-search/navbar-search.component";

@Component({
  selector: 'app-cursos-logado',
  standalone: true,
  imports: [NavbarSearchComponent],
  templateUrl: './cursos-logado.component.html',
  styleUrl: './cursos-logado.component.scss'
})
export class CursosLogadoComponent {

}
