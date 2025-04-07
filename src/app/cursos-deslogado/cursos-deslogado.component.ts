import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { TituloComDivisoresComponent } from "../shared/titulo-com-divisores/titulo-com-divisores.component";

@Component({
  selector: 'app-cursos-deslogado',
  standalone: true,
  imports: [NavbarComponent, TituloComDivisoresComponent],
  templateUrl: './cursos-deslogado.component.html',
  styleUrl: './cursos-deslogado.component.scss'
})
export class CursosDeslogadoComponent {

}
