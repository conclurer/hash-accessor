import {DeclareHash} from '../../lib/hash-declare';
import {Accessor} from '../../lib/hash-accessor';

// This class correctly uses @DeclareHash and @Accessor

@DeclareHash({
    setter: (instance: SampleClass1, key: string, value: any) => {
        instance.hash[key] = value;
    },
    getter: (instance: SampleClass1, key: string) => {
        return instance.hash[key];
    }
})
export class SampleClass1 {
    public hash: {[key: string]: any} = {};

    @Accessor()
    public sampleProperty1: string | null;

    @Accessor('mappedProperty')
    public sampleProperty2: number | null;
}