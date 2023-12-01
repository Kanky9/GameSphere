//Importamos las clases, es el modulo raiz de los demas componentes

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { PiedraPapelTijeraComponent } from './Components/piedra-papel-tijera/piedra-papel-tijera.component';
import { SnakeGameComponent } from './Components/snake-game/snake-game.component';
import { JuegoDeDadosComponent} from './Components/juego-de-dados/juego-de-dados.component';
import { DadosComponent } from './Components/juego-de-dados/dados/dados.component';
import { LoginComponent } from './Components/Usuarios/login/login.component';
import { RegistroComponent } from './Components/Usuarios/registro/registro.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { RankingComponent } from './Components/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PiedraPapelTijeraComponent,
    SnakeGameComponent,
    JuegoDeDadosComponent,
    DadosComponent,
    LoginComponent,
    RegistroComponent,
    ComentariosComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
