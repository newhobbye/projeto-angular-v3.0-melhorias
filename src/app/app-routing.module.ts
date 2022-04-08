import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditaComponent } from './funcionario/edita/edita.component';
import { EnviaComponent } from './funcionario/envia/envia.component';

import { FuncionarioComponent } from './funcionario/funcionario.component';

const routes: Routes = [
  {path: '', component: FuncionarioComponent},
  {path: 'http://localhost:4200', component: FuncionarioComponent},
  {path: 'EnviaComponent', component:	EnviaComponent},
  {path: 'EditaComponent', component: EditaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
