export class TradeModel {
    private _dateOfTrade: Date;
    public readonly quantityOfTrade: number;
    public readonly valueOfTrade: number;

    constructor(date: Date, quantity: number, value: number) {
        this._dateOfTrade = date;
        this.quantityOfTrade = quantity;
        this.valueOfTrade = value;
    };

    public get date(): Date {
        const newDate = new Date(this._dateOfTrade.getTime());
        return newDate;
    };

    public get totalValueOfTrade(): number {
        return this.quantityOfTrade * this.valueOfTrade;
    };

    public static createTrade(tradedAt: string, quantity: string, tradedValue: string): TradeModel {
        try {
            if (!tradedAt) throw new Error(`tradedAt is missing!`);
            if (!quantity) throw new Error(`quantity is missing`);
            if (!tradedValue) throw new Error(`tradedValue is missing!`);

            const formatedDate = new Date(tradedAt.replaceAll('-', ','));
            const formatedQuantity = parseInt(quantity);
            const formatedValue = parseFloat(tradedValue);

            return new TradeModel(formatedDate, formatedQuantity, formatedValue);                   
        } catch (error) {
            throw new Error(error);   
        }
    };
};
