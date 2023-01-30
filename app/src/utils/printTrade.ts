import { TradeModel } from './../models/TradeModel';

export function printTrade(...params: TradeModel[]) {
    for (let param of params) {
        console.log(`
            Date: ${param.date}
            Quantity: ${param.quantityOfTrade}
            Value of Trade: ${param.valueOfTrade}
        `);
    };
};
