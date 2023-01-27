import { TradeController } from "./controllers/TradeController.js";
const form = document.querySelector('.form');
const tradedAt = document.querySelector('#data');
const quantity = document.querySelector('#quantidade');
const tradedValue = document.querySelector('#valor');
const tradeController = new TradeController();
form.addEventListener('submit', event => {
    event.preventDefault();
    tradeController.addNewTrade(tradedAt.value, quantity.value, tradedValue.value);
    clearForm();
});
function clearForm() {
    tradedAt.value = null;
    quantity.value = '1';
    tradedValue.value = '0.0';
    tradedAt.focus();
}
;
