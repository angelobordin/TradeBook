export function printTrade(...params) {
    for (let param of params) {
        console.log(`
            Date: ${param.date}
            Quantity: ${param.quantityOfTrade}
            Value of Trade: ${param.valueOfTrade}
        `);
    }
    ;
}
;
