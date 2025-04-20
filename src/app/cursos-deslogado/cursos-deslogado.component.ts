import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { BeneficiosComponent } from "./beneficios/beneficios.component";
import { CursosComponent } from "./cursos/cursos.component";
import { RodapeComponent } from "../shared/rodape/rodape.component";

@Component({
  selector: 'app-cursos-deslogado',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, BeneficiosComponent, CursosComponent, RodapeComponent],
  templateUrl: './cursos-deslogado.component.html',
  styleUrl: './cursos-deslogado.component.scss'
})
export class CursosDeslogadoComponent {

}
