import { Component } from '@angular/core';
import { Alimento } from './core/shared/models/alimento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public alimentos: Alimento[] = [
    {
      quantidade: '50g',
      descricao: 'Ovo'
    },
    {
      quantidade: '200ml',
      descricao: 'Leite'
    },
    {
      quantidade: '20g',
      descricao: 'Requeijão Light'
    }
  ]

  public botaoTeste(): void {
    console.log('Funcionei!');
  }
}
