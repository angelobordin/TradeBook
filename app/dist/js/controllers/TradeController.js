var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TradesModel } from '../models/TradesModel.js';
import { TradeModel } from '../models/TradeModel.js';
import { TradesView } from '../views/TradesView.js';
import { MessageView } from '../views/MessageView.js';
import { DaysOfWeek } from '../enums/DaysOfWeek.js';
import { measureRuntime } from '../decorators/measureRuntime.js';
import { domInjector } from '../decorators/domInjector.js';
import { TradesService } from '../services/TradesService.js';
export class TradeController {
    constructor() {
        this.tradesList = new TradesModel();
        this.tradesView = new TradesView('#Negociacoes');
        this.messageView = new MessageView('#mensagemView');
        this.tradeService = new TradesService();
        this.tradesView.update(this.tradesList);
    }
    ;
    addNewTrade() {
        try {
            const newTradeRegister = TradeModel.createTrade(this.tradedAt.value, this.quantity.value, this.tradedValue.value);
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
    async importData() {
        try {
            let tradeList = await this.tradeService.getTradeList();
            if (tradeList) {
                tradeList = tradeList.filter(trade => {
                    return !this.tradesList.getTradesList().some(x => x.isDuplicated(trade));
                });
                if (!tradeList.length)
                    alert('Negociações duplicadas não serão importadas!');
            }
            ;
            for (const trade of tradeList) {
                this.tradesList.addTrade(trade);
            }
            ;
            this.tradesView.update(this.tradesList);
        }
        catch (error) {
            throw new Error(error);
        }
        ;
    }
    ;
}
__decorate([
    domInjector('#data')
], TradeController.prototype, "tradedAt", void 0);
__decorate([
    domInjector('#quantidade')
], TradeController.prototype, "quantity", void 0);
__decorate([
    domInjector('#valor')
], TradeController.prototype, "tradedValue", void 0);
__decorate([
    measureRuntime()
], TradeController.prototype, "addNewTrade", null);
;
