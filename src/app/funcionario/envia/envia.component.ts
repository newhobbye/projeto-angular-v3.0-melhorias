import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-envia',
  templateUrl: './envia.component.html',
  styleUrls: ['./envia.component.css']
})
export class EnviaComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();

  sucess: boolean = false;
  error = '';


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {


  }

  cadastrar() {
    this.funcionarioService.cadastrar(this.funcionario).subscribe(funcionario =>{
    this.sucess = true;

    }, err =>{

      this.error = 'Erro ao cadastrar funcionario! Algum dado pode estar faltando, errado ou já existe no banco de dados!';
    });
  }
 //parei aqui
}
