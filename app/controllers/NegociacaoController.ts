import { Negociacoes } from '../models/Negociacoes.js';
import { Negociacao } from '../models/Negociacao.js';

export class NegociacaoController {
    private data: HTMLInputElement;
    private quantidade: HTMLInputElement;
    private valor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    };

    addNegociacao(): void {
        const newNegociacao = this.createNegociacao();
        newNegociacao.data.setDate(12);
        this.negociacoes.addNegociacao(newNegociacao);
        console.log(newNegociacao);
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
        this.quantidade.value = null;
        this.valor.value = null;
        this.data.focus(); // Voltar o cursor para o input data;
    };
};
