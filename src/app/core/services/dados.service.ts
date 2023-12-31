import { Injectable } from '@angular/core';
import { RestService } from './infrastructure/rest.service';
import { Observable } from 'rxjs';
import { PlanoAlimentar } from '../shared/models/plano-alimentar.model';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { PlanoMetas } from '../shared/models/plano-metas.model';
import { SalvarMetasResponse } from '../shared/models/salvar-metas-response.model';
import { AvaliacaoFisica } from '../shared/models/avaliacao.model';
import { Paciente } from '../shared/models/paciente.model';
import { ImagemSalva } from '../shared/models/imagem-salva.model';
import { Agendamento } from '../shared/models/agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(
    private rest: RestService
  ) { }

  public recuperarPlano(): Observable<PlanoAlimentar> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.planoAlimentar,
      headers);
  }

  public recuperarAgendamento(): Observable<Agendamento> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.agendamento,
      headers);
  }

  public recuperarMetas(): Observable<PlanoMetas> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.metas,
      headers);
  }

  public salvarMetas(metas: PlanoMetas): Observable<SalvarMetasResponse> {
    return this.rest.post(environment.api.endpoints.salvarMetas,
      metas,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public recuperarAvaliacao(): Observable<AvaliacaoFisica> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.avaliacaoFisica,
      headers);
  }
  
  public recuperarDadosPaciente(): Observable<Paciente> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.dadosPaciente,
      headers);
  }

  public salvarImagemPaciente(req: Paciente): Observable<ImagemSalva> {
    return this.rest.put(environment.api.endpoints.alterarImagem,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }
}
