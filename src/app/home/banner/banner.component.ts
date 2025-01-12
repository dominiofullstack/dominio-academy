import { Component } from '@angular/core';
import { FormacaoListComponent } from "../formacao-list/formacao-list.component";
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [FormacaoListComponent, ButtonDefaultComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
