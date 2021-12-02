import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoguinhosComponent } from './pages/doguinhos/doguinhos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'doguinhos', component: DoguinhosComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
