import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { JuegoDeDadosComponent } from './Components/juego-de-dados/juego-de-dados.component';
import { PiedraPapelTijeraComponent } from './Components/piedra-papel-tijera/piedra-papel-tijera.component';
import { SnakeGameComponent } from './Components/snake-game/snake-game.component';
import { LoginComponent } from './Components/Usuarios/login/login.component';
import { RegistroComponent } from './Components/Usuarios/registro/registro.component';
import { RankingComponent } from './Components/ranking/ranking.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';

const routes: Routes = [ //Nos permite navegar entre distintas vistas de nuestra aplicacion.
  {
    path: 'inicio', // Nos lleva a la vista principal de la pagina.
    component: InicioComponent //Llamamos al componente, de este modo nos permite enlazar las propiedaes y funciones cuando presionemos la vista nueva, o ingresamos en el path del browser. 

    //NOS APARACE: localhost:4200/inicio
  },

  {
  path: 'juegoDeDados', //Nos muestra el juego de dados.
    component: JuegoDeDadosComponent
    //NOS APARACE: localhost:4200/juegodedados
  },

  {
    path: 'piedrapapeltijera', //Nos muestra el juego de piedra, papel y tijera.
    component: PiedraPapelTijeraComponent
    //NOS APARACE: localhost:4200/piedrapapeltijera
  },

  {
    path: 'snakegame', //Nos va a mostrar el juego de snakegame.
    component: SnakeGameComponent
    //NOS APARACE: localhost:4200/snakegame
  },

  {
    path: 'login', 
    component: LoginComponent
  },

  {
    path: 'registro', 
    component: RegistroComponent
  },

  {
    path: 'ranking', 
    component: RankingComponent
  },

  {
    path: 'comentarios', 
    component: ComentariosComponent
  },

  {
    path: '**', // Si no tenemos nada, nos retorna a la pagina de inicio. 
    component: InicioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
