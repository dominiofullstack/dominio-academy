import { Component } from '@angular/core';
import { ListaAulasComponent } from "./lista-aulas/lista-aulas.component";
import { VideoAulaComponent } from "./video-aula/video-aula.component";

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [ListaAulasComponent, VideoAulaComponent],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {

}
