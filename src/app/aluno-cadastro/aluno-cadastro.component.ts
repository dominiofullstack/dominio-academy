import { Component } from '@angular/core';
import { InputComponent } from "../shared/input/input.component";
import { ButtonDefaultComponent } from "../shared/button-default/button-default.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-cadastro',
  standalone: true,
  imports: [InputComponent, ButtonDefaultComponent],
  templateUrl: './aluno-cadastro.component.html',
  styleUrl: './aluno-cadastro.component.scss'
})
export class AlunoCadastroComponent {

  constructor(private router: Router) {}

  acessarAtivacao(): void {
    this.router.navigate(['/ativar'])
  }

}
