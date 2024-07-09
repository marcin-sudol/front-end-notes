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
  "line" /* "close" */,
  (input) => { /* callback function */ }
);
```

Close
```
rl.close();
```

### File system
```
const fs = require("fs");
```

Files
```
// create
fs.writeFile("filename.txt", "file content", (error) => { /* callback function */ });

// read
fs.readFile("filename.txt", "utf8", (error, file) => { /* callback function */ });

// rename
fs.rename("filename.txt", "newfilename.txt", (error) => { /* callback function */ });

// append
fs.appendFile("filename.txt", "\nNew content", (error) => { /* callback function */ });

// delete
fs.unlink("filename.txt", (error) => { /* callback function */ });
```

Folders
```
// create
fs.mkdir("newfolder", (error) => { /* callback function */ });

// read
fs.readdir("foldername", (error, files) => { /* callback function */ });

// delete
fs.rmdir("foldername", (error) => { /* callback function */ });
```

### Streams
```
const fs = require("fs");

// read
const readStream = fs.createReadStream("filename1.txt", "utf8");
readStream.on("data", (chunk) => { /* callback function */ });

// write
const writeStream = fs.createWriteStream("filename2.txt");
writeStream.write(chunk);

// pipe
readStream.pipe(writeStream);

// zip / unzip
const zlib = require("zlib");

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);

```

### HTTP Server
```
const http = require("http");
```

Create
```
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world from nodejs");
    response.end();
  } else {
    response.write("Using some other domain");
    response.end();
  }
});

server.listen("3000");
```

Serve static files
```
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    /* serve html */
    const readStream = fs.createReadStream("./static/index.html");
    response.writeHead(200, { "Content-type": "text/html" });
    readStream.pipe(response);

  } else if (request.url === "/json") {
    /* serve json */
    const readStream = fs.createReadStream("./static/example.json");
    response.writeHead(200, { "Content-type": "application/json" });
    readStream.pipe(response);

  } else if (request.url === "/png") {
    /* serve image */
    const readStream = fs.createReadStream("./static/example.png");
    response.writeHead(200, { "Content-type": "image/png" });
    readStream.pipe(response);
  }
})
.listen("3000");
```
