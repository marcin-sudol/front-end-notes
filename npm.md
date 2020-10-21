# INITIAL

### CREATE PACKAGE.JSON

```
npm init -y
```

### INSTALL PACKAGES LISTED IN DEPENDENCIES IN PACKAGE.JSON

```
npm install
```

---

# REACT

### CREATE REACT APP

```
npx create-react-app [app-name]
npm start
```

---

# BABEL

### INSTALL BABEL FOR REACT PRESET

```
npm install babel-cli@6 babel-preset-react-app@3
```

### WATCHING FOLDER SRC FOR JSX FILES

```
npx babel --watch src --out-dir . --presets react-app/prod
```

### OR ADD COMMAND TO PACKAGE.JSON AND RUN COMMAND

```
{
"scripts": {
"watch": "npx babel --watch src --out-dir . --presets react-app/prod"
}
}
npm run watch
```

### UNINSTALL

```
npm uninstall babel-cli babel-preset-react-app
```

---

# OTHER

### OPTIONAL INSTALL PROP-TYPES FOR REACT

_NOT REQUIRED IN CURRENT TEMPLATE, PROP-TYPES SCRIPT LOADED IN HTML_

```
npm install --save prop-types
```
