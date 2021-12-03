import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DoguinhosComponent } from './pages/doguinhos/doguinhos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'doguinhos', component: DoguinhosComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cadastrar', component: CadastrarClienteComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
