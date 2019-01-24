# next-opinionated-starter

hi

The project scaffolds out an opinionated front-end stack. Fork it when starting a new project to hit the ground running. 

## Features

- React
- [Next.js](https://github.com/zeit/next.js/) for HMR, SSR, code-splitting, and isomorphic code base
- [Flow](https://github.com/facebook/flow) and [flow-typed](https://github.com/flow-typed/flow-typed) for static type checking
- [Babel module resolver](https://github.com/tleunen/babel-plugin-module-resolver) for absolute imports
- [Nullish coalescing](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator) and [optional chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) supported, without causing flow errors
- [eslint](https://github.com/eslint/eslint) with [Airbnb's style guide](https://github.com/airbnb/javascript) + custom rules enabled
- [Prettier](https://github.com/prettier/prettier) for formatting
- [Jest](https://github.com/facebook/jest) for unit tests
- [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) for git hooks
- [Polyfill.io](https://github.com/financial-times/polyfill-service) for user-agent-based polyfills
- [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) for bundle analysis
- Dockerfile for easy production deployment

## BYO everything else! 

Notice there are some key absences here, like state management and styling solutions. These vary wildly based on project requirements, e.g. [CSS Loader](https://github.com/webpack-contrib/css-loader) might be fine for small projects, but [styled-components](https://github.com/styled-components/styled-components) might be better suited for larger projects. Start from here, then import what you'd like depending on your project!