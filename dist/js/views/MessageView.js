import { View } from "./View.js";
export class MessageView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    ;
}
;
