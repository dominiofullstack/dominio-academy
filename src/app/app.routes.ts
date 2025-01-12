import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoContaComponent } from './aluno-conta/aluno-conta.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoContaAtivacaoComponent } from './aluno-conta-ativacao/aluno-conta-ativacao.component';
import { CursosDeslogadoComponent } from './cursos-deslogado/cursos-deslogado.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'entrar', component: AlunoContaComponent },
    { path: 'cadastrar', component: AlunoCadastroComponent },
    { path: 'ativar', component: AlunoContaAtivacaoComponent },
    { path: 'cursos-deslogado', component: CursosDeslogadoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
