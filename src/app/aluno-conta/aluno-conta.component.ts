import { Component } from '@angular/core';
import { InputComponent } from "../shared/input/input.component";
import { ButtonDefaultComponent } from "../shared/button-default/button-default.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-conta',
  standalone: true,
  imports: [InputComponent, ButtonDefaultComponent],
  templateUrl: './aluno-conta.component.html',
  styleUrl: './aluno-conta.component.scss'
})
export class AlunoContaComponent {

  constructor(private router: Router) {}

  acessarCadastro(): void {
    this.router.navigate(['/cadastrar'])
  }

}
