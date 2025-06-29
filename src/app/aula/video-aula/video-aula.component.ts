import { Component } from '@angular/core';
import { AnotacoesAulaComponent } from "../anotacoes-aula/anotacoes-aula.component";

@Component({
  selector: 'app-video-aula',
  standalone: true,
  imports: [AnotacoesAulaComponent],
  templateUrl: './video-aula.component.html',
  styleUrl: './video-aula.component.scss'
})
export class VideoAulaComponent {

}
