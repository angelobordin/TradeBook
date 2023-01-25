import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoesList: Negociacao[] = [];

    addNegociacao(negociacao: Negociacao) {
        this.negociacoesList.push(negociacao);
    }

    getNegociacoesList(): Negociacao[] {
        return this.negociacoesList;
    }
};
