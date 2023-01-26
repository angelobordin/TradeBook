export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.totalValue}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    ;
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    ;
}
;
