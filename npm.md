# INITIAL

**Create package.json**

```
npm init -y
```

**Install packages listed in dependencies in package.json**

```
npm install
```

**Uninstall packages**

```
npm uninstall [packages names]
```

# BABEL TRANSPILER ES6 TO ES5

**Install**

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

**Watch file**

```
npx babel ./src/script.js --watch --out-file ./script.js --presets=@babel/preset-env
```

**Watch directory**

```
npx babel src --watch --out-dir lib --presets=@babel/preset-env
```

**Add command to package.json**

```
{
  "scripts": {
    "watch": "npx babel src --watch --out-dir lib --presets=@babel/preset-env"
  }
}
```

**Run command**

```
npm run watch
```

# BABEL FOR REACT PRESET

**Install**

```
npm install babel-cli@6 babel-preset-react-app@3
```

**watch folder src for js/jsx files**

```
npx babel --watch src --out-dir . --presets react-app/prod
```

# CREATE REACT APP

**Install**

```
npx create-react-app [app-name]
npm start
```

**install prop-types for react**

_not required in current template_

```
npm install --save prop-types
```

# HTTP SERVER

**Install globally**

```
npm install -g http-server
```

**Add permission to run scripts (if needed)**

```
set-executionpolicy remotesigned
```

**Start Server (with disabled caching)**

```
http-server -c-1
```
