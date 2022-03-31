import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();
  public id: number = 0;
  public error: string = '';
  sucess: boolean = false;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {

  }

  buscarId(id: number){
    this.funcionarioService.buscarId(id).subscribe(funcionario => {
      this.funcionario = funcionario;
      this.sucess = true;
    }, err => {
      console.log('Erro ao buscar por id: ' + err.message);

      this.error = 'Erro ao buscar por id: Funcionario não encontrado!';
    })
  }
}
