import { Component } from '@angular/core';
import { NavbarSearchComponent } from "../shared/navbar-search/navbar-search.component";
import { ListaCursosComponent } from "./lista-cursos/lista-cursos.component";

@Component({
  selector: 'app-cursos-logado',
  standalone: true,
  imports: [NavbarSearchComponent, ListaCursosComponent],
  templateUrl: './cursos-logado.component.html',
  styleUrl: './cursos-logado.component.scss'
})
export class CursosLogadoComponent {

}
