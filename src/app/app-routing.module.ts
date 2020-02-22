import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { PreferenciaComponent } from './preferencia/preferencia.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {path: '', redirectTo: 'buscador', pathMatch:'full'},
  {path: 'buscador', component: BuscadorComponent},
  {path: 'preferencia', component: PreferenciaComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
