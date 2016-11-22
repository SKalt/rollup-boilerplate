# RollupJS Boilerplate

This boilerplate was made possible by an awesome tutorial given by [Jason Lengstorf](https://github.com/jlengstorf).
His 3 part Rollup tutorial is the best on the interwebs right now. Check out his [blog posts](https://code.lengstorf.com/learn-rollup-js/) If you're interested in learning about how to get started using RollupJS.

## Getting started

First, clone the boilerplate to your local machine and install all dependencies:

```
# clone repo
git clone https://github.com/jake-wies/rollup-boilerplate.git

# move to boilerplate directory
cd path/to/rollup-boilerplate

# install dependencies
npm install

# start rollup
npm run watch
```

## Folder structure

Rollup uses `src/scripts/main.js` as the main entry point to your app. Modules can be created in the subdirectory named `modules`, located in the `src/scripts` directory, and then added to `src/scripts/main.js` using ES6 module `imports`.

```
#import some ES6 Module
import some_Method from './modules/some_file.js';
```

Rollup will detect changes to this `main.js` file and bundle up your JS, run it through the plugins you've provided, and output the file to the `build` directory. See the `.rollup.config.js` for all configuration settings.

## Why Rollup?

[Rollup](http://rollupjs.org/) is a module bundler similar to [webpack](https://webpack.github.io/) and [browserify](http://browserify.org/) with slight improvements. These improvements are mainly the ability to bundle up ES6 modules and [tree-shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.vw9os1ov5). Basically, tree-shaking is a feature that allows a module bundler to statically analyze JavaScript files before injecting them onto the document, removing any unused code that may happen to be in the file. With webpack and Browserify, the entire module is included into the main JS file. With Rollup however, only the code you specifically export from your module will be included. This reduces file size and performance.

_Note: Tree-shaking will be available in webpack 2._
