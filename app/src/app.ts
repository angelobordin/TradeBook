import { TradeController } from "./controllers/TradeController.js";

const form = document.querySelector('.form');
const btnImport = document.querySelector('#botao-importa');
const tradeController = new TradeController();

form.addEventListener('submit', event => {
    event.preventDefault();
    tradeController.addNewTrade();
});

btnImport.addEventListener('click', () => {
    tradeController.importData();
});
