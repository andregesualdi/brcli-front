import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { Login } from '../../../../shared/models/login.model';
import { RequisicaoLogin } from '../../../../shared/models/requisicao-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public desabilitado: boolean = true;
  public login: string = '';
  public senha: string = '';
  public nutricionista: boolean = false;
  public usuarioInvalido: boolean = false;
  public erro: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
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
    const req: RequisicaoLogin = {
      usuario: this.login,
      senha: this.senha
    };

    this.loginService.logar(req).subscribe((data: Login) => {
      if (data.authorized) {
        if (data.userType === "paciente") {
          this.router.navigate(['plano-alimentar']);
        } else if (data.userType === "nutricionista") {
          this.nutricionista = true;
        } else {
          this.usuarioInvalido = true;
        }
      } else {
        this.usuarioInvalido = true;
      }
    }, (error) => {
      this.erro = true;
    })
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
    } else {
      this.desabilitado = true;
    }
  }
}
