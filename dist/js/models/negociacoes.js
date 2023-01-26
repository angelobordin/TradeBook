export class Negociacoes {
    constructor() {
        this.negociacoesList = [];
    }
    addNegociacao(negociacao) {
        this.negociacoesList.push(negociacao);
    }
    ;
    getNegociacoesList() {
        return this.negociacoesList;
    }
    ;
}
;
