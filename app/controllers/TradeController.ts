import { TradesModel } from '../models/TradesModel.js';
import { TradeModel } from '../models/TradeModel.js';
import { TradesView } from '../views/TradesView.js';
import { MessageView } from '../views/MessageView.js';
import { DaysOfWeek } from '../enums/DaysOfWeek.js';

export class TradeController {
    private tradesList = new TradesModel();
    private tradesView = new TradesView('#Negociacoes');
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.tradesView.update(this.tradesList);
    };

    public addNewTrade(tradedAt: string, quantity: string, tradedValue: string): void {
        try {
            if (!tradedAt) throw new Error(`tradedAt is missing!`);
            if (!quantity) throw new Error(`quantity is missing`);
            if (!tradedValue) throw new Error(`tradedValue is missing!`);

            const newTradeRegister = TradeModel.createTrade(tradedAt, quantity, tradedValue);
            const dayOfWeek = newTradeRegister.date.getDay();

            if (dayOfWeek == DaysOfWeek.SUNDAY || dayOfWeek == DaysOfWeek.SATURDAY) {
                this.messageView.update('Apenas negociações em dias uteis são aceitas');
                return;
            };

            this.tradesList.addTrade(newTradeRegister);
            this.tradesView.update(this.tradesList);
            this.messageView.update('Negociação Adicionada com sucesso!')
        } catch (error) {
            throw new Error(error);
        }
    };
};
