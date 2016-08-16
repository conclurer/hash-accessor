import test = require('tape');
import Test = test.Test;
import {SampleClass2} from './classes/sample-class-2';

test('incorrect usage test', (t: Test) => {
    let instance: SampleClass2 = new SampleClass2();

    t.throws(() => {
        let a: string | null = instance.sampleProperty;
        void a;
    });
    t.end();
});