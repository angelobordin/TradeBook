import { ITrade } from '../interfaces/Trade.js';
import { TradeModel } from './../models/TradeModel.js';

export class TradesService {

    public getTradeList(): Promise<TradeModel[]> {
        try {
            const result = fetch('http://localhost:8080/dados').then(res => res.json()).then((dados: ITrade[]) => {
                return dados.map((dado: ITrade) => {
                    return new TradeModel(new Date(), dado.vezes, dado.montante);
                });
            });

            return result;
        } catch (error) {
            throw new Error(error)
        }
    }
}