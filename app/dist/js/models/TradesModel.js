export class TradesModel {
    constructor() {
        this.tradesList = [];
    }
    addTrade(negociacao) {
        this.tradesList.push(negociacao);
    }
    ;
    getTradesList() {
        return this.tradesList;
    }
    ;
}
;
