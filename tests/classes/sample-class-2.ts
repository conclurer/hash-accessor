import {Accessor} from '../../lib/hash-accessor';

// This class does not use @DeclareHash, all @Accessor should fail

export class SampleClass2 {
    public hash: {[key: string]: any} = {};

    @Accessor()
    public sampleProperty: string | null;
}