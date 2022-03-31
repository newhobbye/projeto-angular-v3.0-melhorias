import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //para mexer com icones e outros
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioService } from './funcionario/funcionario.service';
import { EnviaComponent } from './funcionario/envia/envia.component';
import { BuscaComponent } from './funcionario/busca/busca.component';
import { DeletaComponent } from './funcionario/deleta/deleta.component';
import { EditaComponent } from './funcionario/edita/edita.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from './funcionario/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    EnviaComponent,
    BuscaComponent,
    DeletaComponent,
    EditaComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [FuncionarioService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
