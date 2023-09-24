import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent {

  public desabilitado: boolean = true;
  public login: string = '';
  public emailEnviado: boolean = false;

  constructor(
    private router: Router
  ) { }

  public recuperarLogin(event: any): void {
    this.login = event;
    this.validarCampos();
  }

  public redirecionarLogin(): void {
    this.router.navigate(['']);
  }

  public recuperarSenha(): void {
    this.emailEnviado = true;
  }

  private validarCampos(): void {
    if (this.login && this.login !== '') {
      this.desabilitado = false;
      console.log(this.login);
    } else {
      this.desabilitado = true;
    }
  }

}
