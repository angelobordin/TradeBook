export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    ;
    get data() {
        return this._data;
    }
    ;
    get quantidade() {
        return this._quantidade;
    }
    ;
    get total() {
        return this._quantidade * this._valor;
    }
    ;
}
