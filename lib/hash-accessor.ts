import {HashRegistryEntry, HashRegistry} from './hash-registry';

function hashAccessor(target: Object, propertyName: string, mappedPropertyName?: string): void {
    let objectName: string = (<any>target.constructor).name;

    Object.defineProperty(target, propertyName, {
        get: function () {
            let settings: HashRegistryEntry = findSettings(objectName);
            return settings.getter(this, mappedPropertyName||propertyName);
        },
        set: function (newVal: any) {
            let settings: HashRegistryEntry = findSettings(objectName);
            settings.setter(this, mappedPropertyName||propertyName, newVal);
        }
    });
}

function findSettings(objectName: string): HashRegistryEntry {
    let settings: HashRegistryEntry | null = HashRegistry.find(objectName);

    // Throw an error if settings are not available
    if (settings == null) {
        throw new Error(`No HashRegistry configuration available for ${objectName}`);
    }

    return settings;
}

/**
 * Accessor for a property of a previously declared hash.
 * @param mappedPropertyName
 * @returns {(target:Object, propertyKey:(string|symbol))=>undefined}
 * @constructor
 */
export function Accessor(mappedPropertyName?: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        hashAccessor(target, propertyKey.toString(), mappedPropertyName);
    }
}