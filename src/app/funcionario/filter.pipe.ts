import { Pipe, PipeTransform } from '@angular/core';
import { FuncionarioModel } from './funcionario.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(funcionarios: FuncionarioModel[], search: string) {
    search = search.trim().toLowerCase();

    if(funcionarios){
      return funcionarios.filter(funcionario => funcionario.name.toLowerCase().includes(search));

    }else{
      return funcionarios;
    }
  }

}
