import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss']
})
export class PrimeiroAcessoComponent {
  public codigoValido: boolean = false;
  public validarDesabilitado: boolean = true;
  public cadastrarDesabilitado: boolean = true;
  public codigoCadastro: string = '';
  public loginUsuario: string = '';
  public senhaUsuario: string = '';

  constructor(
    private router: Router
  ) { }

  public recuperarLogin(event: any): void {
    this.loginUsuario = event;
    this.validarCamposCadastro();
  }

  public recuperarSenha(event: any): void {
    this.senhaUsuario = event;
    this.validarCamposCadastro();
  }

  public recuperarCodigo(event: any): void {
    this.codigoCadastro = event;
    this.validarCampoCodigo();
  }

  public validarCodigo(): void {
    this.codigoValido = true;
  }

  public cadastrar(): void {
    this.router.navigate(['']);
  }
  
  private validarCampoCodigo(): void {
    if (this.codigoCadastro && this.codigoCadastro !== '') {
      console.log(this.codigoCadastro);
      this.validarDesabilitado = false;
    } else {
      this.validarDesabilitado = true;
    }
  }

  private validarCamposCadastro(): void {
    if (this.loginUsuario && this.loginUsuario !== ''
      && this.senhaUsuario && this.senhaUsuario !== '') {
      console.log(this.loginUsuario);
      console.log(this.senhaUsuario);
      this.cadastrarDesabilitado = false;
    } else {
      this.cadastrarDesabilitado = true;
    }
  }
}
