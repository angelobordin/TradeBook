export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    get data() {
        const newDate = new Date(this._data.getTime());
        return newDate;
    }
    ;
    get totalValue() {
        return this.quantidade * this.valor;
    }
    ;
}
;
