import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';
import { SairComponent } from './components/sair/sair.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ArticleComponent,
    DashboardComponent,
    CadastroComponent,
    SolicitacoesComponent,
    RelatoriosComponent,
    SobreComponent,
    LoginComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
