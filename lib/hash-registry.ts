/**
 * Registry for all classes using HashRegistry
 */
export class HashRegistry {
    private static registry: HashRegistryType = {};

    /**
     * Registers getters and setters for an object's hash
     * @param objectName
     * @param settings
     */
    public static register(objectName: string, settings: HashRegistryEntry) {
        HashRegistry.registry[objectName] = settings;
    }

    /**
     * Returns registered getters and setters for an object's hash
     * @param objectName
     * @returns {HashRegistryEntry}
     */
    public static find(objectName: string): HashRegistryEntry | null {
        return HashRegistry.registry[objectName];
    }
}

export interface HashRegistryType {
    [key: string]: HashRegistryEntry;
}

export interface HashRegistryEntry {
    getter: (instance: any, key: string) => any;
    setter: (instance: any, key: string, value: any) => void;
}