import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public desabilitado: boolean = true;
  public login: string = '';
  public senha: string = '';

  constructor(
    private router: Router
  ) { }

  public recuperarLogin(event: any): void {
    this.login = event;
    this.validarCampos();
  }

  public recuperarSenha(event: any): void {
    this.senha = event;
    this.validarCampos();
  }

  public acessarApp(): void {
    this.router.navigate(['plano-alimentar']);
  }

  public esqueceuSenha(): void {
    this.router.navigate(['esqueci-senha']);
  }

  public primeiroAcesso(): void {
    this.router.navigate(['primeiro-acesso']);
  }

  private validarCampos(): void {
    if (this.senha && this.senha !== '' && this.login && this.login !== '') {
      this.desabilitado = false;
      console.log(this.login);
      console.log(this.senha);
    } else {
      this.desabilitado = true;
    }
  }
}
