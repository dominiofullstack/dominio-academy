import { Component } from '@angular/core';
import { InputComponent } from '../shared/input/input.component';
import { ButtonDefaultComponent } from '../shared/button-default/button-default.component';

@Component({
  selector: 'app-aluno-conta-ativacao',
  standalone: true,
  imports: [InputComponent, ButtonDefaultComponent],
  templateUrl: './aluno-conta-ativacao.component.html',
  styleUrl: './aluno-conta-ativacao.component.scss'
})
export class AlunoContaAtivacaoComponent {

}
