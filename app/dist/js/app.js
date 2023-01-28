import { TradeController } from "./controllers/TradeController.js";
const form = document.querySelector('.form');
const tradeController = new TradeController();
form.addEventListener('submit', event => {
    event.preventDefault();
    tradeController.addNewTrade();
});
