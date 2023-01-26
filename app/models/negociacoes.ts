import { Negociacao } from './Negociacao.js';

export class Negociacoes {
    private negociacoesList: Negociacao[] = [];

    addNegociacao(negociacao: Negociacao) {
        this.negociacoesList.push(negociacao);
    };

    getNegociacoesList(): readonly Negociacao[] {
        return this.negociacoesList;
    };
};
