# React micro-frontend PoC with Webpack Module Federation, Lerna and Typescript

## 📚 Stack

```
- React
- Typescript
- Webpack Module Federation
- Babel
- Lerna
- Yarn
- Jest
- React Testing Library
- ESLint
- Prettier
```

## ℹ️ Requirements

Requires Node JS version `14.17.0+`. Using `nvm`:

```sh
nvm install 14.17.0
nvm use 14.17.0
```

## 🏃‍♀️ Running the app locally

#### _Installing dependencies:_

```
yarn install
```

#### _Generating federate types:_

> For more info about this, have a look at the `Miscellaneous` section below.

```
yarn make-types
```

#### _Running in dev mode:_

> This will start all MFEs.

```
yarn start
```

#### _Build and serve:_

> This will build/serve all MFEs.

```
yarn build
yarn serve
```

#### _Running a single MFE:_

```
cd apps/MFE_DIR
yarn start
```

#### _Clean `dist` folders after a build:_

```
yarn clean
```

#### _Run scripts in batch:_

> You can run any remote (MFE) level script in a single batch by using the following format:

```
lerna run --parallel SCRIPT_NAME
```

## 🖥 Adding a new MFE

- 🚧 [WIP] Need a CLI wizard to generate new MFEs.

## 🧩 Miscellaneous

- To automate the type generation for the federate modules, the app is making use of the [`@pixability-ui/federated-types`](https://github.com/pixability/federated-types). To generate the federate types run `yarn make-types`.

- Every remote (MFE) is using a `federation.config.json` file to define the federate configuration. This config is then used in the webpack config files by both the `ModuleFederationPlugin` and `MFLiveReloadPlugin` plugins.

## ❓ F.A.Q.

- 🚧 [WIP] Add FAQ section

## 🔍 Further reading

- [Building Micro-Frontends](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/), by Luca Mezzalira

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)

- [Micro-frontends](https://martinfowler.com/articles/micro-frontends.html), by Martin Fowler
