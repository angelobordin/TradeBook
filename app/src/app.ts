import { TradeController } from "./controllers/TradeController.js";

const form = document.querySelector('.form');
const tradedAt = <HTMLInputElement>document.querySelector('#data');
const quantity = <HTMLInputElement>document.querySelector('#quantidade');
const tradedValue = <HTMLInputElement>document.querySelector('#valor');
const tradeController = new TradeController();

form.addEventListener('submit', event => {
    event.preventDefault();
    tradeController.addNewTrade(tradedAt.value, quantity.value, tradedValue.value);
    clearForm();
});

function clearForm(): void {
    tradedAt.value = null;
    quantity.value = '1';
    tradedValue.value = '0.0';
    tradedAt.focus(); // Voltar o cursor para o input data;
};
