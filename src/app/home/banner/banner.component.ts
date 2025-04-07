import { Component } from '@angular/core';
import { FormacaoListComponent } from "../formacao-list/formacao-list.component";
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";
import { TituloComDivisoresComponent } from "../../shared/titulo-com-divisores/titulo-com-divisores.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [FormacaoListComponent, ButtonDefaultComponent, TituloComDivisoresComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
