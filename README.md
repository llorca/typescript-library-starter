# TypeScript Library Starter

A starter kit for developing TypeScript libraries and automating their releases.

* **[TypeScript](https://github.com/Microsoft/TypeScript)** for scalable, statically typed JavaScript.
* **[TSLint](https://github.com/palantir/tslint)** for TypeScript linting.
* **[commitlint](https://github.com/marionebl/commitlint)** for commit linting via **[Husky](https://github.com/typicode/husky)** Git hooks.
* **[Commitizen](https://github.com/commitizen/cz-cli)** for standardized commit messages.
* **[webpack](https://webpack.js.org)** for bundling assets.
* **[semantic-release](https://github.com/semantic-release/semantic-release)** for effortless release management.

## Installation

Clone this repository and delete the Git history:

```
git clone https://github.com/llorca/typescript-library-starter && rm -rf typescript-library-starter/.git
```

Search for the `TLS_CONFIG` string in the project, then replace each occurrence with your desired configuration.

Initialize as a new repository:

```
git init
```

Install the dependencies:

```
npm install
```

## Usage

Start the webpack development server:

```
npm run dev
```

Commit changes with Commitizen:

```
npm run commit
```

## Automate releases

Sign in to your accounts on [NPM](https://www.npmjs.com) and [Travis](https://travis-ci.org).

Install `semantic-release`:

```
npm install -g semantic-release-cli
```

Set it up. Note that the `.travis.yml` file already exists so there's no need to create it again via this step.

```
semantic-release-cli setup
```

From now on, a build will run through Travis after every push to the remote GitHub repository. If the build succeeds, a new release will be created on GitHub and published on NPM.

## License

[MIT](./LICENSE)
