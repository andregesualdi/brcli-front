import { Injectable } from '@angular/core';
import { RestService } from './infrastructure/rest.service';
import { RequisicaoLogin } from '../shared/models/requisicao-login.model';
import { Observable } from 'rxjs';
import { Login } from '../shared/models/login.model';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { RequisicaoCodigo } from '../shared/models/requisicao-codigo.model';
import { CodigoValidado } from '../shared/models/codigo-validado.model';
import { CadastrarPaciente } from '../shared/models/cadastrar-paciente.model';
import { Cadastro } from '../shared/models/cadastro.model';
import { RecuperarSenha } from '../shared/models/recuperar-senha.model';
import { EmailEnviado } from '../shared/models/email-enviado.model';
import moment from "moment-timezone";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  public logar(req: RequisicaoLogin): Observable<Login> {
    return this.rest.post(environment.api.endpoints.login,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public sair(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['']);
  }

  public validarCodigo(req: RequisicaoCodigo): Observable<CodigoValidado> {
    return this.rest.post(environment.api.endpoints.primeiroAcesso,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public cadastrar(req: CadastrarPaciente): Observable<Cadastro> {
    return this.rest.put(environment.api.endpoints.cadastroPaciente,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public recuperarSenha(req: RecuperarSenha): Observable<EmailEnviado> {
    return this.rest.post(environment.api.endpoints.recuperarSenha,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public isSessaoValida(): boolean {
    const expiresAt = localStorage.getItem('expires_at');
    return expiresAt ? true : false;
  }

  public isDescontectado(): boolean {
    return !this.isLogado();
  }

  private isLogado(): boolean {
    return moment().isBefore(this.validadeSessao());
  }

  public sessao(login: Login): void {
    const expiresAt = moment().add(login.expiresIn, 'seconds');

    localStorage.setItem('id_token', login.access_token!);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  private validadeSessao(): moment.Moment {
    const validade = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(validade!);
    return moment(expiresAt);
  }
}
