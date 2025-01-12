import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";
import { JornadaComponent } from "./jornada/jornada.component";
import { CardIndicadoresComponent } from "./card-indicadores/card-indicadores.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { PerguntasComponent } from "./perguntas/perguntas.component";
import { RodapeComponent } from "../shared/rodape/rodape.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ApresentacaoComponent,
    JornadaComponent,
    CardIndicadoresComponent,
    NoticiasComponent,
    DepoimentosComponent,
    PerguntasComponent,
    RodapeComponent,
    NavbarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
