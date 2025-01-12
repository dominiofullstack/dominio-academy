import { Component } from '@angular/core';
import { ButtonDefaultComponent } from "../../shared/button-default/button-default.component";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [ButtonDefaultComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

}
