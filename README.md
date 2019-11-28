# react-pug-react-scripts

Created for create-react-app v3.2.0  
just add react-pug environment with [babel-plugin-transform-react-pug](https://github.com/pugjs/babel-plugin-transform-react-pug)

## install `create-react-app` with react-pug-react-scripts

```
npx create-react-app app-name --scripts-version react-pug-react-scripts
```

for TypeScript

```
npx create-react-app app-name --scripts-version react-pug-react-scripts --typescript
```

note: [TypeScript removes "import" of unused modules.](https://github.com/microsoft/TypeScript/issues/9191)
variables of inside of pug is NOT detected by the system.
fixed it by bellow code but it's untidy.

```
const use = [React, icon]
```

## below is the original README

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
