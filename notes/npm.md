### Initial

Create package.json

```
npm init -y
```

Install packages listed in dependencies in package.json

```
npm install
```

Uninstall packages

```
npm uninstall [packages names]
```

### Babel transpiler ES6 to ES5

Install

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Watch file

```
npx babel ./src/script.js --watch --out-file ./script.js --presets=@babel/preset-env
```

Watch directory

```
npx babel src --watch --out-dir lib --presets=@babel/preset-env
```

Add command to package.json

```
{
  "scripts": {
    "watch": "npx babel src --watch --out-dir lib --presets=@babel/preset-env"
  }
}
```

Run command

```
npm run watch
```

### Babel for React preset

Install

```
npm install babel-cli@6 babel-preset-react-app@3
```

Watch folder src for js/jsx files

```
npx babel --watch src/js --out-dir lib/js --presets react-app/prod
```

### Create React App

Install

```
npx create-react-app [app-name]
npm start
```

Install prop-types for react

```
npm install --save prop-types
```

### HTTP server

Install globally

```
npm install -g http-server
```

Add permission to run scripts (if needed)

```
set-executionpolicy remotesigned
```

Start Server (with disabled caching)

```
http-server -c-1
```
