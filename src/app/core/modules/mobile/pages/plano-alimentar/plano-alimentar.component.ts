import { Component, OnInit } from '@angular/core';
import { PlanoAlimentar } from '../../../../shared/models/plano-alimentar.model';
import { Router } from '@angular/router';
import { Refeicao } from '../../../../shared/models/refeicao.model';
import { DadosService } from '../../../../services/dados.service';
import { AcessoService } from '../../../../services/acesso.service';
import { Agendamento } from 'src/app/core/shared/models/agendamento.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent implements OnInit {
  
  public planoAlimentar: PlanoAlimentar = new PlanoAlimentar;
  public agendamento: Agendamento = new Agendamento;
  public textoAgendamento: string = '';
  public loading: boolean = true;
  public erro: boolean = false;

  constructor(
    private router: Router,
    private dados: DadosService,
    private acessoService: AcessoService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.recuperarAgendamento();
  }

  public abrirRefeicao(refeicao: Refeicao): void {
    this.router.navigate(['plano-alimentar/refeicao', refeicao.tipo], {
      state: {
        alimentos: refeicao
      }
    });
  }

  public gerarTextoAgendamento(): void {
    if (this.agendamento && this.agendamento.data) {
      this.translate.get('PLANO_ALIMENTAR.TEXTO_AGENDAMENTO', { dia: this.agendamento.data, hora: this.agendamento.hora }).subscribe(
        {
          next: (texto) => this.textoAgendamento = texto
        }
      );
    } else {
      this.translate.get('PLANO_ALIMENTAR.SEM_AGENDAMENTO').subscribe(
        {
          next: (texto) => this.textoAgendamento = texto
        }
      );
    }
  }

  private recuperarAgendamento(): void {
    this.dados.recuperarAgendamento().subscribe(
      {
        next: (data: Agendamento) => {
          if (data) {
            this.agendamento = data;
            this.gerarTextoAgendamento();
            this.recuperarPlano();
          } else {
            this.erro = true;
            this.loading = false;
          }
        },
        error: (error) => {
          if (error.error.code === "BRCLI404") {
            this.agendamento = new Agendamento;
            this.recuperarPlano();
          } else {
            this.loading = false;
            this.erro = true;
          }
        }
      }
    );
  }

  private recuperarPlano(): void {
    this.dados.recuperarPlano().subscribe(
      {
        next: (data: PlanoAlimentar) => {
          if (data) {
            this.planoAlimentar = data;
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
    );
  }
}
