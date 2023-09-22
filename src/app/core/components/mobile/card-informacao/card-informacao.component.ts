import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-informacao',
  templateUrl: './card-informacao.component.html',
  styleUrls: ['./card-informacao.component.scss']
})
export class CardInformacaoComponent {
  @Input()
  public titulo: string = 'Titulo teste';

  @Input()
  public descricao: string = 'Subtitulo teste';

  @Input()
  public texto: string = 'Texto teste';

  @Input()
  public imagem: string = '';

  @Input()
  public direcionador: boolean = true;

  @Output()
  public cliqueBotao: EventEmitter<any> = new EventEmitter();

  public navegar(event: Event): void {
    this.cliqueBotao.emit('clicou');
  }
}
