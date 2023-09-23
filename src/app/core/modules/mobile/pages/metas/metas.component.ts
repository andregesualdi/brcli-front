import { Component, OnInit } from '@angular/core';
import { PlanoMetas } from '../../../../shared/models/plano-metas.model';
import { MockPlanoMetas } from '../../../../../../assets/mocks/mock-plano-metas';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {
  public planoMetas: PlanoMetas = new PlanoMetas;
  public metasNaoAlteradas: boolean = true;
  public erro: boolean = false;

  ngOnInit(): void {
    this.planoMetas = MockPlanoMetas.metas;
  }

  public metaAlterada(event: any): void {
    console.log(event);
    this.metasNaoAlteradas = false;
  }

  public salvarMetas(): void {
    console.log('Meta salva');
    this.metasNaoAlteradas = true;
  }
}
