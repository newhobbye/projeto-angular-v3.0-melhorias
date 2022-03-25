import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from './funcionario.model';
import { FuncionarioService } from './funcionario.service';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();
  funcionarios: Array<any> = new Array();


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  listarFuncionarios(){
    this.funcionarioService.listarFuncionarios().subscribe(funcionarios =>{
      this.funcionarios = funcionarios;
    },  err =>{
      console.log('Erro ao listar os alunos', err);
      });
 }
} //parei no metodo listarFuncionarios

