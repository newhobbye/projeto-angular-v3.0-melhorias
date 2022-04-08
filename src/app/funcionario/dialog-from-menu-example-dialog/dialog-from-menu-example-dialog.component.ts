import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioModel } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';


@Component({
  selector: 'dialog-from-menu-example-dialog',
  templateUrl: './dialog-from-menu-example-dialog.component.html',
  styleUrls: ['./dialog-from-menu-example-dialog.component.css']
})
export class DialogFromMenuExampleDialog  {

  funcionario: FuncionarioModel = new FuncionarioModel();

  constructor(
    public router: Router,
    private funcionarioService: FuncionarioService,
    public dialogRef: MatDialogRef<DialogFromMenuExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute,
  ) { }


  // delete(){
  //   this.teste = true;
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteId() {

    console.log(this.data.name, "aqui");

    let id: number = Number(this.data.cpf);
    return this.funcionarioService.deletarId(id).subscribe(nada =>{


      this.funcionario = new FuncionarioModel();
      this.dialogRef.close();

    }, (err: { message: string; }) => {
      console.log('Erro ao deletar por id' + err.message);
      //this.response = 'Erro ao deletar por id: Funcionario não encontrado!';
    });


  }
}

