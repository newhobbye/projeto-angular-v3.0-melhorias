import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {

  public id: number = 0;
  public response: string = '';

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  deletarId(id: number){
    return this.funcionarioService.deletarId(id).subscribe(nada =>{

    }, err => {
      console.log('Erro ao deletar por id' + err.message);
      this.response = 'Erro ao deletar por id: Funcionario não encontrado!';
    });

    this.response = 'Deletado!';
  }
}
