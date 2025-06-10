import { Component } from '@angular/core';
import { NavbarSearchComponent } from "../shared/navbar-search/navbar-search.component";
import { ButtonDefaultComponent } from "../shared/button-default/button-default.component";

@Component({
  selector: 'app-pagina-nao-encontrada',
  standalone: true,
  imports: [NavbarSearchComponent, ButtonDefaultComponent],
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrl: './pagina-nao-encontrada.component.scss'
})
export class PaginaNaoEncontradaComponent {

}
