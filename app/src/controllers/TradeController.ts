import { TradesModel } from '../models/TradesModel.js';
import { TradeModel } from '../models/TradeModel.js';
import { TradesView } from '../views/TradesView.js';
import { MessageView } from '../views/MessageView.js';
import { DaysOfWeek } from '../enums/DaysOfWeek.js';
import { measureRuntime } from '../decorators/measureRuntime.js';
import { domInjector } from '../decorators/domInjector.js';
import { TradesService } from '../services/TradesService.js';

export class TradeController {
    @domInjector('#data')
    private tradedAt: HTMLInputElement;

    @domInjector('#quantidade')
    private quantity: HTMLInputElement;

    @domInjector('#valor')
    private tradedValue: HTMLInputElement;
    private tradesList = new TradesModel();
    private tradesView = new TradesView('#Negociacoes');
    private messageView = new MessageView('#mensagemView');
    private tradeService = new TradesService();

    constructor() {
        this.tradesView.update(this.tradesList);
    };

    @measureRuntime()
    public addNewTrade(): void {
        try {
            const newTradeRegister = TradeModel.createTrade(this.tradedAt.value, this.quantity.value, this.tradedValue.value);
            const dayOfWeek = newTradeRegister.date.getDay();

            if (dayOfWeek == DaysOfWeek.SUNDAY || dayOfWeek == DaysOfWeek.SATURDAY) {
                this.messageView.update('Apenas negociações em dias uteis são aceitas');
                return;
            };

            this.tradesList.addTrade(newTradeRegister);
            this.tradesView.update(this.tradesList);
            this.messageView.update('Negociação Adicionada com sucesso!');
        } catch (error) {
            throw new Error(error);
        }
    };

    public async importData(): Promise<void> {
        try {
            let tradeList = await this.tradeService.getTradeList();
            if (tradeList) {
                tradeList = tradeList.filter(trade => {
                    return !this.tradesList.getTradesList().some(x => x.isDuplicated(trade));
                });
                if (!tradeList.length) alert('Negociações duplicadas não serão importadas!');
            };

            for (const trade of tradeList) {
                this.tradesList.addTrade(trade)
            };
            this.tradesView.update(this.tradesList);
        } catch (error) {
            throw new Error(error);
        };
    };
};
