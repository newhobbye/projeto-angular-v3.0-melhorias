import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {


  }

  cadastrar(funcionario: FuncionarioModel) {
    this.funcionarioService.cadastrar(funcionario).subscribe(funcionario =>{
    this.sucess = true;
    alert('Dados enviados com sucesso!');

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./../']);


    }, err =>{

      this.error = 'Erro ao cadastrar funcionario! Algum dado pode estar faltando, errado ou já existe no banco de dados!';
      console.log(err);

    });
  }
 //parei aqui
}
