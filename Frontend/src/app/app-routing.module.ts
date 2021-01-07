import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Graduates/add/add.component';
import { EditComponent } from './Graduates/edit/edit.component';
import { ListarComponent } from './Graduates/listar/listar.component';
const routes: Routes = [
  {path:'', redirectTo:'/listar', pathMatch:'full'},
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
