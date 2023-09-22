import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './core/components/botao/botao.component';
import { MenuRodapeComponent } from './core/components/mobile/menu-rodape/menu-rodape.component';
import { CardInformacaoComponent } from './core/components/mobile/card-informacao/card-informacao.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    MenuRodapeComponent,
    CardInformacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
