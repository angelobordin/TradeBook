import { Negociacoes } from '../models/Negociacoes.js';
import { Negociacao } from '../models/Negociacao.js';
import { NegociacoesView } from '../views/NegociacoesView.js';
import { MensagemView } from '../views/MensagemView.js';
;
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#Negociacoes');
        this.mensagemView = new MensagemView('#mensagemView');
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    addNegociacao() {
        const newNegociacao = this.createNegociacao();
        const dayOfWeek = newNegociacao.data.getDay();
        if (dayOfWeek == 0 || dayOfWeek == 6) {
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
        ;
        this.negociacoes.addNegociacao(newNegociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!');
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
        this.quantidade.value = '1';
        this.valor.value = '0.0';
        this.data.focus();
    }
    ;
}
;
