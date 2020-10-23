# INITIAL

### CREATE PACKAGE.JSON

```
npm init -y
```

**install packages listed in dependencies in package.json**

```
npm install
```

**uninstall packages**

```
npm uninstall [packages names]
```

---

# BABEL

### INSTALL BABEL

```
npm install --save-dev @babel/core @babel/cli
```

**watch file**

```
npx babel ./src/script.js --watch --out-file ./script.js
```

**or add command to package.json and run command**

```
{
  "scripts": {
    "watch": "npx babel --watch src --out-dir . --presets react-app/prod"
  }
}

npm run watch
```

---

# REACT

### INSTALL BABEL FOR REACT PRESET

```
npm install babel-cli@6 babel-preset-react-app@3
```

**watch folder src for js/jsx files**

```
npx babel --watch src --out-dir . --presets react-app/prod
```

### CREATE REACT APP

```
npx create-react-app [app-name]
npm start
```

**install prop-types for react**

_not required in current template_

```
npm install --save prop-types
```
