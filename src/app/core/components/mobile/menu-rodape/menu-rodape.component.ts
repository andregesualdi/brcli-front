import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-rodape',
  templateUrl: './menu-rodape.component.html',
  styleUrls: ['./menu-rodape.component.scss']
})
export class MenuRodapeComponent {
  public planoSelecionado: boolean = true;
  public metasSelecionado: boolean = false;
  public avaliacaoSelecionado: boolean = false;
  public perfilSelecionado: boolean = false;

  public navegar(tela: string): void {
    switch (tela) {
      case 'plano':
        this.planoSelecionado = true;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = false;
        break;
      case 'metas':
        this.planoSelecionado = false;
        this.metasSelecionado = true;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = false;
        break;
      case 'avaliacao':
        this.planoSelecionado = false;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = true;
        this.perfilSelecionado = false;
        break;
      case 'perfil':
        this.planoSelecionado = false;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = true;
        break;
    }
  }
}
