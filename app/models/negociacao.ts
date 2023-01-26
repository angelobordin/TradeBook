export class Negociacao {
    private _data: Date;
    public readonly quantidade: number;
    public readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    };

    get data(): Date {
        const newDate = new Date(this._data.getTime());
        return newDate;
    };

    get totalValue(): number {
        return this.quantidade * this.valor;
    };
};
