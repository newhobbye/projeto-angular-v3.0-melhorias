import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioModel } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  @Input() funcionario2: FuncionarioModel = new FuncionarioModel();
  public id: number = Number(this.funcionario2.cpf);
  public response: string = '';



  constructor(private funcionarioService: FuncionarioService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  enviar(funcionario: FuncionarioModel){

    this.funcionarioService.editarId(this.id, this.funcionario2).subscribe(funcionario =>{
      alert('Concluido!');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./../']);

      this.funcionario2 = new FuncionarioModel();
    }, err =>{

      this.response = "Erro ao enviar, dados incorretos!";
      console.log('Erro ao atualizar', err);
    });




  }

  cancelar(){

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./../']);

   }



  // editarId(){
  //   this.funcionario = this.funcionario2;
  //   this.funcionarioService.editarId(this.id, this.funcionario2).subscribe(funcionario =>{

  //   }, err =>{
  //   console.log('Erro ao atualizar', err);
  //  });





}
