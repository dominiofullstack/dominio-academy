import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { BeneficiosComponent } from "./beneficios/beneficios.component";

@Component({
  selector: 'app-cursos-deslogado',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, BeneficiosComponent],
  templateUrl: './cursos-deslogado.component.html',
  styleUrl: './cursos-deslogado.component.scss'
})
export class CursosDeslogadoComponent {

}
