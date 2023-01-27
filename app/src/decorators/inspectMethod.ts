export function inspectMethod() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`Method Name: ${propertyKey}`);
            console.log(`Origin of Method: ${target.constructor['name']}`)
            console.log(`Method Params: ${args}`);
            console.log(`Method Result: ${(originalMethod.apply(this, args)) ?? "Method don't return result"}`)
        };

        return descriptor;
    };
};
