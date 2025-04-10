import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { TituloComDivisoresComponent } from "../shared/titulo-com-divisores/titulo-com-divisores.component";
import { FormacaoListComponent } from "../home/formacao-list/formacao-list.component";
import { ButtonDefaultComponent } from "../shared/button-default/button-default.component";

@Component({
  selector: 'app-cursos-deslogado',
  standalone: true,
  imports: [NavbarComponent, TituloComDivisoresComponent, FormacaoListComponent, ButtonDefaultComponent],
  templateUrl: './cursos-deslogado.component.html',
  styleUrl: './cursos-deslogado.component.scss'
})
export class CursosDeslogadoComponent {

}
