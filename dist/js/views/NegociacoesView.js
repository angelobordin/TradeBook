import { View } from "./View.js";
export class TradesView extends View {
    template(model) {
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
                    ${model.getNegociacoesList().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatDate(negociacao.date)}</td>
                                <td>${negociacao.quantityOfTrade}</td>
                                <td>${negociacao.totalValueOfTrade}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>`;
    }
    ;
    formatDate(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    ;
}
;
