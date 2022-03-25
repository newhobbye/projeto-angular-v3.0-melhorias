import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscaComponent } from './funcionario/busca/busca.component';
import { DeletaComponent } from './funcionario/deleta/deleta.component';
import { EditaComponent } from './funcionario/edita/edita.component';
import { EnviaComponent } from './funcionario/envia/envia.component';

import { FuncionarioComponent } from './funcionario/funcionario.component';

const routes: Routes = [
  {path: '', component: FuncionarioComponent},
  {path: 'FuncionarioComponent', component:	FuncionarioComponent},
  {path: 'EnviaComponent', component:	EnviaComponent},
  {path: 'BuscaComponent', component: BuscaComponent},
  {path: 'DeletaComponent', component: DeletaComponent},
  {path: 'EditaComponent', component: EditaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
