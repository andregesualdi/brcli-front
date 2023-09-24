import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoAlimentarComponent } from './core/modules/mobile/pages/plano-alimentar/plano-alimentar.component';
import { AvaliacaoFisicaComponent } from './core/modules/mobile/pages/avaliacao-fisica/avaliacao-fisica.component';
import { MetasComponent } from './core/modules/mobile/pages/metas/metas.component';
import { PerfilComponent } from './core/modules/mobile/pages/perfil/perfil.component';
import { RefeicaoComponent } from './core/modules/mobile/pages/refeicao/refeicao.component';

const routes: Routes = [
  { path: 'plano-alimentar', component: PlanoAlimentarComponent},
  { path: 'plano-alimentar/refeicao/:tipo', component: RefeicaoComponent, data: { public: true } },
  { path: 'avaliacao-fisica', component: AvaliacaoFisicaComponent },
  { path: 'metas', component: MetasComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
