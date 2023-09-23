import { PlanoMetas } from "../../app/core/shared/models/plano-metas.model";

export class MockPlanoMetas {
    public static metas: PlanoMetas = {
        id: 111,
        data: new Date(),
        metas: [
            {
                descricao: 'Comer frutas duas vezes por dia',
                atingida: false
            },
            {
                descricao: 'Ir à academia quatro vezes por semana',
                atingida: true
            },
            {
                descricao: 'Beber dois litros de água',
                atingida: true
            }
        ]
    }
}