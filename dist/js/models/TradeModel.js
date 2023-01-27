export class TradeModel {
    constructor(date, quantity, value) {
        this._dateOfTrade = date;
        this.quantityOfTrade = quantity;
        this.valueOfTrade = value;
    }
    ;
    get date() {
        const newDate = new Date(this._dateOfTrade.getTime());
        return newDate;
    }
    ;
    get totalValueOfTrade() {
        return this.quantityOfTrade * this.valueOfTrade;
    }
    ;
    static createTrade(tradedAt, quantity, tradedValue) {
        try {
            if (!tradedAt)
                throw new Error(`tradedAt is missing!`);
            if (!quantity)
                throw new Error(`quantity is missing`);
            if (!tradedValue)
                throw new Error(`tradedValue is missing!`);
            const formatedDate = new Date(tradedAt.replaceAll('-', ','));
            const formatedQuantity = parseInt(quantity);
            const formatedValue = parseFloat(tradedValue);
            return new TradeModel(formatedDate, formatedQuantity, formatedValue);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    ;
}
;
