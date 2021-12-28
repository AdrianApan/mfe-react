## React micro-frontend PoC with Webpack Module Federation, Lerna and Typescript

#### 📚 Stack

```
- React
- Webpack Module Federation
- Babel
- Lerna
- Yarn
- Typescript
- ESLint
- Prettier
- Hot reload with Federated Module Reload
```

#### ℹ️ Requirements

Requires Node JS version `14.17.0+`. Using `nvm`:

```sh
nvm install 14.17.0
nvm use 14.17.0
```

#### 🏃‍♀️ Running the app locally

_Installing dependencies:_

```
yarn install
```

_Generating federate types:_

> For more info about this, have a look at the `Miscellaneous` section below.

```
yarn make-types
```

_Running in dev mode:_

> This will start all MFEs.

```
yarn start
```

_Build and serve:_

> This will build/serve all MFEs.

```
yarn build
yarn serve
```

_Running a single MFE:_

```
cd apps/MFE_DIR
yarn start
```

#### 🖥 Adding a new MFE

- 🚧 [WIP] Need a CLI wizard to generate new MFEs.

#### 🧩 Miscellaneous

- To automate the type generation for the federate modules, the app is making use of the [`@pixability-ui/federated-types`](https://github.com/pixability/federated-types). To generate the federate types run `yarn make-types`.

#### 🔍 Further reading

- [Building Micro-Frontends](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/), by Luca Mezzalira

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)

- [Micro-frontends](https://martinfowler.com/articles/micro-frontends.html), by Martin Fowler
