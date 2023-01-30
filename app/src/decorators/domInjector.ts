// Sibstitui a propriedade (passada como parametro 'selector') no Object (definida pela variavel target) e passa como valor o retorno da função getter; 
export function domInjector(selector: string) {
    return function(target: any, propertyKey: string) {
        let element: HTMLElement;

        const getter = function() {
            // Verifica se o elemento ja existe em cache para não realizar busca desnecessárias;
            if (!element) element = document.querySelector(selector); 
            return element;
        };

        Object.defineProperty(target, propertyKey, { get: getter });
    };
};
