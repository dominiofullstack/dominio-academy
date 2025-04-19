import { Component } from '@angular/core';
import { TituloComDivisoresComponent } from "../../shared/titulo-com-divisores/titulo-com-divisores.component";
import { FormacaoListComponent } from "../../home/formacao-list/formacao-list.component";
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TituloComDivisoresComponent, FormacaoListComponent, ButtonDefaultComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
