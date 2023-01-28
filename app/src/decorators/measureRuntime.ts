// Função decorator para medir a performance/velocidade de execução dos métodos;
export function measureRuntime(param: boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {

            let divider = (param) ? 1 : 1000;
            let metric = (param) ? 'milliseconds' : 'seconds';

            const initTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();
            const runtime = (finalTime - initTime)/divider;

            console.log(`${propertyKey} in ${target.constructor['name']}, runtime is: ${runtime} ${metric}`);
            return result;
        };

        return descriptor;
    };
};
