import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { FuncionarioModel } from './funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  listarFuncionarios(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }

  cadastrar(funcionario: FuncionarioModel): Observable<any> {
    return this.http.post(environment.apiUrl, funcionario);
  }

  buscarId(id: number): Observable<any> {
    return this.http.get(environment.apiUrl.concat(id.toString()));
  }

  deletarId(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl.concat(id.toString()));
  }

   editarId(id: number, funcionario: FuncionarioModel): Observable<any> {


    return this.http.put(environment.apiUrl.concat(id.toString()), funcionario);
  }
}
