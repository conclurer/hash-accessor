import test = require('tape');
import Test = test.Test;
import {SampleClass1} from './classes/sample-class-1';

test('basic test', (t: Test) => {
    let object: SampleClass1 = new SampleClass1();

    t.equal(json(object.hash), json({}));
    t.ok(object.sampleProperty1 == null);
    t.ok(object.sampleProperty2 == null);

    // Set sampleProperty1
    object.sampleProperty1 = 'example';
    t.equal(object.hash['sampleProperty1'], 'example');
    t.equal(object.sampleProperty1, 'example');

    // Set sampleProperty2 (mapped to mappedProperty)
    object.sampleProperty2 = 2;
    t.ok(object.hash['sampleProperty2'] == null);
    t.equal(object.hash['mappedProperty'], 2);
    t.equal(object.sampleProperty2, 2);

    t.end();
});

function json(obj: any): string {
    return JSON.stringify(obj);
}