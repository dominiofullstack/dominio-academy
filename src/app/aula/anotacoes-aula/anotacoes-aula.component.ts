import { Component } from '@angular/core';
import { InputComponent } from "../../shared/input/input.component";
import { ButtonIconComponent } from "../../shared/button-icon/button-icon.component";

@Component({
  selector: 'app-anotacoes-aula',
  standalone: true,
  imports: [InputComponent, ButtonIconComponent],
  templateUrl: './anotacoes-aula.component.html',
  styleUrl: './anotacoes-aula.component.scss'
})
export class AnotacoesAulaComponent {

}
