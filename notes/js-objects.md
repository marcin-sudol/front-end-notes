### Objects

```
const person = {

  firstName: "Marcin",          // property

  lastName : "Unknown",

  weight   : 70,

  language : "en",

  name     : function() {       // method
    return this.firstName +
      " " + this.lastName;
  }

  get lang() {                  // getter
    return this.language;
  }

  set lang(value) {             // setter
    this.language =
      value.toLowerCase();
  }

}

person.car = "Ford"             // add property

delete person.weight            // delete property

Object.values(obj)              // converts values into array

JSON.stringify(obj)             // converts object into string
```

### Object's constructor

```
function Person(first, last, weight) {

  this.firstName = first;

  this.lastName = last;

  this.weight = weight;

  this.name = function() {      // method
    return this.firstName +
      " " + this.lastName;
  };

  this.changeName =
    function(name) {
      this.lastName = name;
  };
}
```

### Constructor's prototype

```
Person.prototype.nationality = "English";

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
}
```

Every object is linked to constructor's prototype. If prototype is assigned to new object, objects already created are still linked to old prototype.

Object can have property named the same as prototype's property. In that case object's property has priority, when accessing that property's name.

### Constructor's methods

```
Object.getOwnPropertyNames(object)   // list of all properties
```

### Constructor's inheritance

```
function Parent() {
  ...
}

function Child() {
  Parent.call(this);
  ...
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

```

Inheritance by linking prototypes: prototype of child's prototype should be set to parent's prototype.
