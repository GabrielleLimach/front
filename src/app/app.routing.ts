import {Routes, RouterModule} from '@angular/router'; 
import { SobreComponent } from './components/sobre/sobre.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { SairComponent } from './components/sair/sair.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes =[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'solicitacoes', component: SolicitacoesComponent},
    {path: 'relatorios', component: RelatoriosComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'sair', component: SairComponent},
    {path: 'login', component: LoginComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);