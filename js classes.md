### Class

```
class Model extends Car {             // inheritance

  constructor(brand, model) {         // constructor
    super(brand);
    this._model = model;
  }

  age(x) {                            // method
    return x - this.year;
  }

  get model() {                       // getter
    return this._model;
  }

  set model(value) {                  // setter
    this._model = value;
  }

  static hello() {                    // static method
    return "Hello!";
  }

}

Model.hello();                        // invoking static method
```
