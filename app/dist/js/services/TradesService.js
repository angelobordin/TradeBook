import { TradeModel } from './../models/TradeModel.js';
export class TradesService {
    getTradeList() {
        try {
            const result = fetch('http://localhost:8080/dados').then(res => res.json()).then((dados) => {
                return dados.map((dado) => {
                    return new TradeModel(new Date(), dado.vezes, dado.montante);
                });
            });
            return result;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
