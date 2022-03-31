import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FuncionarioModel } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnChanges {

  funcionario: FuncionarioModel = new FuncionarioModel();
  funcionario2: FuncionarioModel = new FuncionarioModel();

  @Input() public id: number = 0;
  public auxId: string = this.id.toString();

  public response: string = '';


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['id']) //trabalhar neste changes pois pode estar errado
    console.log(this.auxId);

  }

  buscarId(id: number){
    this.funcionario2.cpf = this.id.toString();
    this.funcionarioService.buscarId(id).subscribe(funcionario => {
      this.funcionario = funcionario;

    }, err => {
      console.log('Erro ao buscar por id: ' + err.message);

      this.response = 'Erro ao buscar por id: Funcionario não encontrado!';

    })
  }

  editarId(){
    this.funcionario = this.funcionario2;
    this.funcionarioService.editarId(this.id, this.funcionario2).subscribe(funcionario =>{

    }, err =>{
    console.log('Erro ao atualizar', err);
   });



  }

}
