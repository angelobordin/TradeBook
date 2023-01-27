import { TradesModel } from '../models/TradesModel.js';
import { TradeModel } from '../models/TradeModel.js';
import { TradesView } from '../views/TradesView.js';
import { MessageView } from '../views/MessageView.js';
import { DaysOfWeek } from '../enums/DaysOfWeek.js';
export class TradeController {
    constructor() {
        this.tradesList = new TradesModel();
        this.tradesView = new TradesView('#Negociacoes');
        this.messageView = new MessageView('#mensagemView');
        this.tradesView.update(this.tradesList);
    }
    ;
    addNewTrade(tradedAt, quantity, tradedValue) {
        try {
            if (!tradedAt)
                throw new Error(`tradedAt is missing!`);
            if (!quantity)
                throw new Error(`quantity is missing`);
            if (!tradedValue)
                throw new Error(`tradedValue is missing!`);
            const newTradeRegister = TradeModel.createTrade(tradedAt, quantity, tradedValue);
            const dayOfWeek = newTradeRegister.date.getDay();
            if (dayOfWeek == DaysOfWeek.SUNDAY || dayOfWeek == DaysOfWeek.SATURDAY) {
                this.messageView.update('Apenas negociações em dias uteis são aceitas');
                return;
            }
            ;
            this.tradesList.addTrade(newTradeRegister);
            this.tradesView.update(this.tradesList);
            this.messageView.update('Negociação Adicionada com sucesso!');
        }
        catch (error) {
            throw new Error(error);
        }
    }
    ;
}
;
