import { Component, OnInit } from '@angular/core';
import { PlanoAlimentar } from '../../../../shared/models/plano-alimentar.model';
import { MockPlanoAlimentar } from '../../../../../../assets/mocks/mock-plano-alimentar';
import { Router } from '@angular/router';
import { Refeicao } from '../../../../shared/models/refeicao.model';

@Component({
  selector: 'app-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent implements OnInit {
  
  public planoAlimentar: PlanoAlimentar = new PlanoAlimentar;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
      this.planoAlimentar = MockPlanoAlimentar.planoAlimentar;
  }

  public abrirRefeicao(refeicao: Refeicao): void {
    this.router.navigate(['plano-alimentar/refeicao', refeicao.tipo], {
      state: {
        alimentos: refeicao
      }
    });
  }
}
