import { TradesModel } from "../models/TradesModel.js";
import { View } from "./View.js";

export class TradesView extends View<TradesModel> {

    protected template(model: TradesModel): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data:</th>
                        <th>Quantidade:</th>
                        <th>Valor Total:</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.getTradesList().map(trade => {
                        return `
                            <tr>
                                <td>${this.formatDate(trade.date)}</td>
                                <td>${trade.quantityOfTrade}</td>
                                <td>${trade.totalValueOfTrade}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>`;
    };

    private formatDate(date: Date): string {
        return new Intl.DateTimeFormat().format(date);
    };
};