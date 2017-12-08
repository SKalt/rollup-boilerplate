# RollupJS Boilerplate

This boilerplate was made possible by an awesome tutorial given by [Jason Lengstorf](https://github.com/jlengstorf).
His 3 part Rollup tutorial is the best on the interwebs right now. Check out his [blog posts](https://code.lengstorf.com/learn-rollup-js/) If you're interested in learning about how to get started using RollupJS.

## Getting started

First, clone the boilerplate to your local machine and install all dependencies:

```
# clone repo
git clone https://github.com/jake-wies/rollup-boilerplate.git

# move to boilerplate directory
cd rollup-boilerplate

# install dependencies
npm install

# start rollup
npm run watch
```

## Folder structure

Rollup uses `src/scripts/main.js` as the main entry point to your app. Modules can be created in the subdirectory `src/scripts/modules` and then added to `src/scripts/main.js` using ES6 module `imports`.

```
#import some ES6 Module
import { some_Method } from './modules/some_file.js';
```

Rollup will detect changes to this `main.js` file and bundle up your JS, run it through the plugins you've provided in the `plugins` array located in `rollup.config.js`, and output the file to the `build` directory. See the `rollup.config.js` for all configuration settings.

## Why Rollup?
[Rollup's creator said it best](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c):
<blockquote cite="">

TL;DR: Use webpack for apps, and Rollup for libraries

...

If you need code-splitting, or you have lots of static assets, or you’re building something with lots of CommonJS dependencies, Webpack is a better choice. If your codebase is ES2015 modules and you’re making something to be used by other people, you probably want Rollup.
</blockquote>