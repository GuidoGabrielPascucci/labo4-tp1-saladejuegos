import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { AhorcadoComponent } from './components/juegos/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './components/juegos/mayor-o-menor/mayor-o-menor.component';
import { PreguntadosComponent } from './components/juegos/preguntados/preguntados.component';
import { RegistroComponent } from './components/rutas/registro/registro.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'quiensoy', component: QuienSoyComponent},
    {path: 'ahorcado', component: AhorcadoComponent},
    {path: 'mayor-o-menor', component: MayorOMenorComponent},
    {path: 'preguntados', component: PreguntadosComponent},
];
