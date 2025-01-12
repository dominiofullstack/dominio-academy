import { Component } from '@angular/core';
import { ButtonDefaultComponent } from "../button-default/button-default.component";

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [ButtonDefaultComponent],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.scss'
})
export class RodapeComponent {

}
