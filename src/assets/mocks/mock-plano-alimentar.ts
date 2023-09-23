import { PlanoAlimentar } from "src/app/core/shared/models/plano-alimentar.model";

export class MockPlanoAlimentar {
    public static planoAlimentar: PlanoAlimentar = {
        id: 111,
        data: new Date(),
        refeicoes: [
          {
            tipo: 'cafe',
            horario: '8h30',
            alimentos: [
              {
                quantidade: '50g',
                descricao: 'Ovo'
              },
              {
                quantidade: '200ml',
                descricao: 'Leite'
              },
              {
                quantidade: '20g',
                descricao: 'Requeijão Light'
              },
              {
                quantidade: '50g',
                descricao: 'Banana Prata'
              }
            ]
          },
          {
            tipo: 'almoco',
            horario: '12h',
            alimentos: [
              {
                quantidade: '100g',
                descricao: 'Arroz'
              },
              {
                quantidade: '80g',
                descricao: 'Feijão'
              },
              {
                quantidade: '150g',
                descricao: 'Filé de Frango'
              },
              {
                quantidade: '-',
                descricao: 'Salada à vontade'
              }
            ]
          },
          {
            tipo: 'lanchetarde',
            horario: '16h30',
            alimentos: [
              {
                quantidade: '100ml',
                descricao: 'Iogurte desnatado'
              },
              {
                quantidade: '200g',
                descricao: 'Morango'
              }
            ]
          },
          {
            tipo: 'janta',
            horario: '20h',
            alimentos: [
              {
                quantidade: '80g',
                descricao: 'Arroz'
              },
              {
                quantidade: '50g',
                descricao: 'Feijão'
              },
              {
                quantidade: '100g',
                descricao: 'Acém Moído'
              },
              {
                quantidade: '100g',
                descricao: 'Brócolis cozido'
              },
              {
                quantidade: '-',
                descricao: 'Salada à vontade'
              }
            ]
          },
        ]
      }
}