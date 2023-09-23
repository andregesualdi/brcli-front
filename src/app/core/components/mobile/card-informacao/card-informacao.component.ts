import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-informacao',
  templateUrl: './card-informacao.component.html',
  styleUrls: ['./card-informacao.component.scss']
})
export class CardInformacaoComponent {
  @Input()
  public descricao: string = '';

  @Input()
  public texto: string = '';

  @Input()
  public imagem: string | undefined;

  @Input()
  public direcionador: boolean = false;

  @Output()
  public cliqueBotao: EventEmitter<any> = new EventEmitter();

  public navegar(event: Event): void {
    this.cliqueBotao.emit('clicou');
  }

  get getTipoRefeicao(): string {
    switch (this.imagem) {
      case 'cafe':
        return 'PLANO_ALIMENTAR.CAFE';
        break;
      case 'lanchemanha':
        return 'PLANO_ALIMENTAR.LANCHEMANHA';
        break;
      case 'almoco':
        return 'PLANO_ALIMENTAR.ALMOCO';
        break;
      case 'lanchetarde':
        return 'PLANO_ALIMENTAR.LANCHETARDE';
        break;
      case 'janta':
        return 'PLANO_ALIMENTAR.JANTA';
        break;
      case 'ceia':
        return 'PLANO_ALIMENTAR.CEI';
        break;
      default:
        return '';
        break;
    }
  }
}
