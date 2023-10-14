import { Component, OnInit } from '@angular/core';
import { PlanoMetas } from '../../../../shared/models/plano-metas.model';
import { DadosService } from '../../../../services/dados.service';
import { SalvarMetasResponse } from '../../../../shared/models/salvar-metas-response.model';
import { TranslateService } from '@ngx-translate/core';
import { AcessoService } from '../../../../services/acesso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {
  public planoMetas: PlanoMetas = new PlanoMetas();
  public metasNaoAlteradas: boolean = true;
  public erro: boolean = false;
  public loading: boolean = false;
  public metasAntigas: string = '';
  public loadingSalvarMetas: boolean = false;
  public sucessoAoSalvar: boolean = false;
  public erroAoSalvar: boolean = false;
  public aviso: string = '';

  constructor (
    private dados: DadosService,
    private translate: TranslateService,
    private acessoService: AcessoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.recuperarMetas();
  }

  public avisoMetasSalvas(): void {
    setTimeout(() => {
      this.sucessoAoSalvar = false;
      this.erroAoSalvar = false;
      this.aviso = '';
    }, 3000);
  }

  public metaAlterada(event: any): void {
    this.planoMetas.metas = this.planoMetas.metas?.map((obj) => {
      if (obj.descricaoMeta === event.descricaoMeta) {
        return {...obj, atingida: event.atingida};
      }
      return obj;
    });
    if (this.metasAntigas === JSON.stringify(this.planoMetas.metas)) {
      this.metasNaoAlteradas = true;
    } else {
      this.metasNaoAlteradas = false;
    }
  }

  public salvarMetas(): void {
    this.loadingSalvarMetas = true;
    this.metasNaoAlteradas = true;
    this.dados.salvarMetas(this.planoMetas).subscribe(
      {
        next: (data: SalvarMetasResponse) => {
          if (data && data.success) {
            this.metasNaoAlteradas = true;
            this.loadingSalvarMetas = false;
            this.preencherSucesso();
            this.sucessoAoSalvar = true;
            this.metasAntigas = JSON.stringify(this.planoMetas.metas);
          } else {
            this.metasNaoAlteradas = true;
            this.loadingSalvarMetas = false;
            this.preencherErro();
            this.erroAoSalvar = true;
            this.planoMetas.metas = JSON.parse(this.metasAntigas);
          }
          this.avisoMetasSalvas();
        },
        error: () => {
            this.metasNaoAlteradas = true;
            this.loadingSalvarMetas = false;
            this.preencherErro();
            this.erroAoSalvar = true;
            this.planoMetas.metas = JSON.parse(this.metasAntigas);
            this.avisoMetasSalvas();
        }
      }
    )
  }

  private preencherSucesso(): void {
    this.translate.get('METAS.METAS_SALVAS').subscribe(
      {
        next: (texto) => this.aviso = texto
      }
    );
  }

  private preencherErro(): void {
    this.translate.get('METAS.ERRO_AO_SALVAR').subscribe(
      {
        next: (texto) => this.aviso = texto
      }
    );
  }

  private recuperarMetas(): void {
   this.dados.recuperarMetas().subscribe(
        {
          next: (data: PlanoMetas) => {
            if (data) {
              this.planoMetas = data;
              this.metasAntigas = JSON.stringify(this.planoMetas.metas);
            } else {
              this.erro = true;
            }
            this.loading = false;
          },
          error: () => {
            this.loading = false;
            this.erro = true;
          }
        }
      )
  }
}
