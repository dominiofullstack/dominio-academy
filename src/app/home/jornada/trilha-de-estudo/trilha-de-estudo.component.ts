import { Component } from '@angular/core';
import { MontanhaComponent } from "../montanha/montanha.component";

@Component({
  selector: 'app-trilha-de-estudo',
  standalone: true,
  imports: [MontanhaComponent],
  templateUrl: './trilha-de-estudo.component.html',
  styleUrl: './trilha-de-estudo.component.scss'
})
export class TrilhaDeEstudoComponent {

  marcos: any[] = [
    {
      numero: 1,
      descricao: 'Lógica de Programação com JavaScript',
      posicaoMontanha: 1
    },
    {
      numero: 2,
      descricao: 'Programação Orientada a Objetos com TypeScript',
      posicaoMontanha: 5
    },
    {
      numero: 3,
      descricao: 'Versionamento de Código com GitHub',
      posicaoMontanha: 3
    },
    {
      numero: 4,
      descricao: 'Primeiro Site com HTML, CSS e JavaScript',
      posicaoMontanha: 9
    },
    {
      numero: 5,
      descricao: 'Evoluindo com Angular e TypeScript',
      posicaoMontanha: 6
    },
    {
      numero: 6,
      descricao: 'Java com Spring',
      posicaoMontanha: 11
    },
    {
      numero: 7,
      descricao: 'Banco de Dados',
      posicaoMontanha: 15
    }
  ];

  getGrausRotacaoLinha(index: number): string {
    const rem = 16;
    const dy = (this.marcos[index].posicaoMontanha - this.marcos[index + 1].posicaoMontanha) * rem;
    const dx = 6 * rem;

    const angleRadians = Math.atan2(dy, dx);
    const angleDegrees = angleRadians * (180 / Math.PI);

    return `rotate(${angleDegrees}deg)`;
  }

  getLarguraLinha(index: number): string {
    const rem = 16;
    const dy = (this.marcos[index].posicaoMontanha - this.marcos[index + 1].posicaoMontanha) * rem;
    const dx = 6 * rem;

    return `${Math.sqrt(dx * dx + dy * dy)}px`;
  }

}
