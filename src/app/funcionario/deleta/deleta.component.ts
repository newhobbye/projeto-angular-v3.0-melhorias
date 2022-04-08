import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-deleta',
  templateUrl: './deleta.component.html',
  styleUrls: ['./deleta.component.css']
})
export class DeletaComponent implements OnInit {

  public id: number = 0;


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }


}
