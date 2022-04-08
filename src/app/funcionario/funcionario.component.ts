import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  validation: boolean = false;
  total: number = 0;


  clickDelete: boolean = false;
  funcionarioDelete: FuncionarioModel = new FuncionarioModel();
  funcionarioDeleteParagraph: string = "";

  public response: string = '';


  funcionarioEdit: FuncionarioModel = new FuncionarioModel();

  constructor(private funcionarioService: FuncionarioService,
    private router: Router){ }

  ngOnInit(): void {
    this.listarFuncionarios();



  }

  listarFuncionarios(){
    this.funcionarioService.listarFuncionarios().subscribe(
      funcionarios =>{
      this.funcionarios = funcionarios;
      this.total = funcionarios.length;

    },  err =>{
      console.log('Erro ao listar os alunos', err);
      });
 }

 onChange(event: any) {
  console.log(this.search, "aqui");

 }



 captured(funcionario: FuncionarioModel) {

  this.funcionarioEdit = funcionario;
  this.validation = true;
 }


 deleteId() {

  let id: number = Number(this.funcionarioDelete.cpf);
  return this.funcionarioService.deletarId(id).subscribe(nada =>{

    alert('Deletado!');
    this.funcionarioDelete = new FuncionarioModel();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./../']);
    //this.response = 'Deletado!';

  }, err => {
    console.log('Erro ao deletar por id' + err.message);
    this.response = 'Erro ao deletar por id: Funcionario não encontrado!';
  });


}

deleteClick(funcionario: FuncionarioModel){


  this.clickDelete = true;
  this.funcionarioDelete = funcionario;
  this.funcionarioDeleteParagraph = funcionario.name;

}





cancelDeleteClick(){

  this.clickDelete = false;
  this.funcionarioDelete = new FuncionarioModel();
}

}





