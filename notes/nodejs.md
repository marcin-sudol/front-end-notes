### Modules

Export as module

```
module.exports = sum;
module.exports = { sum2, PI, SomeMath };
```

Import from module

```
const sum = require("./sum");
const { sum2, PI, SomeMath } = require("./math");
```

### Event emitter

```
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", () => { console.log("tutorial event has occured"); });
eventEmitter.on("sum", (num1, num2) => { console.log(num1 + num2); });

eventEmitter.emit("tutorial");
eventEmitter.emit("sum", 1, 2);
```

Extending event emitter

```
class Person extends EventEmitter {
  constructor(name) { super(); this._name = name; }
  get name() { return this._name; }
}

let martin = new Person("Martin");
martin.on("name", () => { console.log("my name is " + martin.name); });
marcin.emit("name");
```

### Readline

```
const readline = require("readline");
```

Standard input / output

```
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
});
```
Display question

```
rl.question(
  `What is the sum of ${num1} + ${num2}?\n`,
  (userInput) => { /* callback function */ }
);
```

Set and display prompt

```
rl.setPrompt("Incorrect response please try again\n");
rl.prompt();
```

Add event listener
```
rl.on(
  "line",
  (input) => { /* callback function */ }
);
```

Close

```
rl.close();
```
