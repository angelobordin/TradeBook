import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }
    ;
    addNegociacao() {
        const newNegociacao = this.createNegociacao();
        console.log(newNegociacao);
        this.clearForm();
    }
    ;
    createNegociacao() {
        const regExp = /-/g;
        const date = new Date(this.data.value.replace(regExp, ','));
        const quantity = parseInt(this.quantidade.value);
        const value = parseFloat(this.valor.value);
        return new Negociacao(date, quantity, value);
    }
    ;
    clearForm() {
        this.data.value = null;
        this.quantidade.value = null;
        this.valor.value = null;
        this.data.focus(); // Voltar o cursor para o input data;
    }
}
