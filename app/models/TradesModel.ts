import { TradeModel } from './TradeModel.js';

export class TradesModel {
    private tradesList: TradeModel[] = [];

    public addTrade(negociacao: TradeModel) {
        this.tradesList.push(negociacao);
    };

    public getTradesList(): readonly TradeModel[] {
        return this.tradesList;
    };
};
