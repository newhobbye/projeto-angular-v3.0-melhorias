import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { FuncionarioModel } from './funcionario.model';
import { FuncionarioService } from './funcionario.service';
import { DialogFromMenuExampleDialog } from './dialog-from-menu-example-dialog/dialog-from-menu-example-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  funcionario: FuncionarioModel = new FuncionarioModel();
  funcionarios: Array<FuncionarioModel> = new Array();
  search:string="";
  validation: boolean = false;
  total: number = 0;

  teste: boolean = false;


  clickDelete: boolean = false;
  funcionarioDelete: FuncionarioModel = new FuncionarioModel();
  funcionarioDeleteParagraph: string = "";

  public response: string = '';


  funcionarioEdit: FuncionarioModel = new FuncionarioModel();

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    public dialog: MatDialog){ }

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


deleteClick(funcionario: FuncionarioModel){


  this.clickDelete = true;
  this.funcionarioDelete = funcionario;
  this.funcionarioDeleteParagraph = funcionario.name;

}


cancelDeleteClick(){

  this.clickDelete = false;
  this.funcionarioDelete = new FuncionarioModel();
}


openDialog(funcionario: FuncionarioModel): void{
  this.funcionarioDelete = funcionario;
  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {
    //width: '30%',
    data: funcionario,
  });

  dialogRef.afterClosed().subscribe(result => {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./../']);



      // this.router.navigate(['/financials']).then(r =>
      //   window.location.reload())


  });
}

}





