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


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {


  }

  cadastrar() {
    this.funcionarioService.cadastrar(this.funcionario).subscribe(funcionario =>{
      funcionario = new FuncionarioModel();
    }, err =>{
      console.log('Erro ao listar funcionarios: ' + err.message);

    });
  }
 //parei aqui
}
