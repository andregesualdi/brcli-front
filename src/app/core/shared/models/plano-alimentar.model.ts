import { Refeicao } from "./refeicao.model";

export class PlanoAlimentar {
    public id: Number | undefined;
    public data: Date | undefined;
    public refeicoes: Array<Refeicao> | undefined;
}
