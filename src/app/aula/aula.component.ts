import { Component } from '@angular/core';
import { ListaAulasComponent } from "./lista-aulas/lista-aulas.component";
import { VideoAulaComponent } from "./video-aula/video-aula.component";
import { PerguntaComponent } from "./pergunta/pergunta.component";
import { TextoAulaComponent } from "./texto-aula/texto-aula.component";

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [ListaAulasComponent, VideoAulaComponent, PerguntaComponent, TextoAulaComponent],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {

}
