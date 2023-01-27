export function measureRuntime(param = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = (param) ? 1 : 1000;
            let metric = (param) ? 'milliseconds' : 'seconds';
            const initTime = performance.now();
            originalMethod.apply(this, args);
            const finalTime = performance.now();
            const runtime = (finalTime - initTime) / divider;
            console.log(`${propertyKey} in ${target.constructor['name']}, runtime is: ${runtime} ${metric}`);
        };
        return descriptor;
    };
}
;
