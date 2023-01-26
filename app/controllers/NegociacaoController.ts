import { Negociacoes } from '../models/Negociacoes.js';
import { Negociacao } from '../models/Negociacao.js';
import { NegociacoesView } from '../views/NegociacoesView.js';

export class NegociacaoController {
    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#Negociacoes');

    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    };

    addNegociacao(): void {
        const newNegociacao = this.createNegociacao();
        this.negociacoes.addNegociacao(newNegociacao);
        this.negociacoesView.update(this.negociacoes);
        this.clearForm();
    };

    createNegociacao(): Negociacao {
        const regExp = /-/g;
        const date = new Date(this.data.value.replace(regExp, ','));
        const quantity = parseInt(this.quantidade.value);
        const value = parseFloat(this.valor.value);

        return new Negociacao(date, quantity, value);
    };

    clearForm(): void {
        this.data.value = null;
        this.quantidade.value = '1';
        this.valor.value = '0.0';
        this.data.focus(); // Voltar o cursor para o input data;
    };
};
