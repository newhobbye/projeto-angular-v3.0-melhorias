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
  funcionarios: Array<FuncionarioModel> = new Array();
  search:string="";
  cpf: string = '';
  contador: number[] = [];

  funcionario2: FuncionarioModel = new FuncionarioModel();

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.listarFuncionarios();
  }

  listarFuncionarios(){
    this.funcionarioService.listarFuncionarios().subscribe(
      funcionarios =>{
      this.funcionarios = funcionarios;

    },  err =>{
      console.log('Erro ao listar os alunos', err);
      });
 }

 onChange(event: any) {


   console.log(this.search, "aqui");

 }

 click(funcionario: FuncionarioModel) {
  console.log("Está sendo clicado");

  let value: number = 0;
  this.contador.push(value++);

  this.cpf =  funcionario.cpf;

 }

 alteraFuncionario(funcionario: FuncionarioModel){

  this.funcionario2.cpf = funcionario.cpf;
  let id = Number(this.cpf);
  this.funcionarioService.editarId(id, this.funcionario2).subscribe(funcionario =>{

    this.funcionario2 = new FuncionarioModel();

    this.cpf='';
    this.listarFuncionarios();

    }, err =>{

      console.log(err);

    });

 }

 cancelarEdit(){
  this.cpf='';
}
}

