import {HashRegistry, HashRegistryEntry} from './hash-registry';

function hashDeclarationDecorator(target: Object, declaration: HashRegistryEntry): void {
    if (HashRegistry.find((<any>target).name) != null) {
        throw new Error(`Cannot re-declare hash configuration for ${(<any>target).name}`);
    }

    HashRegistry.register((<any>target).name, declaration);
}

/**
 * Declares getter and setter for a class's hash.
 * @param declaration
 * @returns {(target:Object)=>undefined}
 * @constructor
 */
export function DeclareHash(declaration: HashRegistryEntry): ClassDecorator {
    return (target: Object) => {
        hashDeclarationDecorator(target, declaration);
    };
}