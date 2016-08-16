# Hash Accessor

Defines accessors to map class properties to a hash / object.

Creates getter and setter for given properties to map against a given hash.

You can use HashAccessor when using data objects (like from an API) within classes without the hassle of synchronizing classes' properties with data hashes.

You can define a mapping for each property in each class that is automatically applied every time you access the decorated properties.

## Basic Usage

```typescript
@DeclareHash({
  setter: (instance: User, key: string, value: any) => {
    instance.data[key] = value;
  },
  getter: (instance: User, key: string) => {
    return instance.data[key];
  }
})
class User {
  public data: {[key: string]: any};
  
  @Accessor() public id: number;
  @Accessor('full_name') public fullName: string;
  @Accessor('email_address') public email: string;
  
  public constructor(data?: {[key: string]: any}) {
    this.data = data;
  }
}

let user1: User = new User({
  id: 1,
  full_name: 'John Smith',
  email_address: 'john@conclurer.com'
});

console.log(user1.email); // => 'john@conclurer.com'

user1.fullName = 'The Doctor';
console.log(user1.data['full_name']); // => 'The Doctor'
```

## How to use it

1. Use `@DeclareHash()` to decorate an object and define setters and getters for the properties hash
2. Use `@Accessor()` for each property withing the decorated object to store in the object's hash. You can also supply a custom key for each `@Accessor()` to synchronize the property with.

```typescript
@Accessor() protected prop1: any; // will be linked with key 'prop1'
@Accessor('otherKey') protected prop2: any; // will be linked with key 'otherKey'
```

## Installation

Run

```
npm install --save hash-accessor
```