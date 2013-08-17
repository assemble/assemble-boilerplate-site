# [boilerplate-site v0.1.1](http://github.com/assemble/boilerplate-site) [![Build Status](https://travis-ci.org/assemble/boilerplate-site.png)](https://travis-ci.org/assemble/boilerplate-site)

> Boilerplate for generating a basic static site with Assemble.

### NOTICE: THIS BOILERPLATE IS BEING REFACTORED

You may find outdated information or examples in this project. While we're refactoring, you might be more interested in [assemble-bootstrap](http://github.com/assemble/assemble-bootstrap) in the meantime.

## Getting Started

* **[Download this project][download]** and unzip it into a new folder.
* In the project folder, run `npm install` to install [Assemble][assemble], [Grunt](http://gruntjs.com/) and any other dependencies.
* Once the dependencies are installed you may run `grunt assemble` to build the example project.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile][gruntfile], as well as install and use Grunt plugins.


## The "assemble" task

### Overview
In the project's Gruntfile, the example `assemble` task is pre-loaded with paths and options following standard Grunt.js conventions:

```js
grunt.initConfig({
  // The "assemble" task
  assemble: {
    // Task-level options.
    options: {
      flatten: true,
      assets: 'dist/assets',
      layout: 'templates/layouts/default.hbs',
      partials: 'templates/partials/*.hbs',
      data: 'src/data/*.{json,yml}'
    },
    // Templates to build into pages
    pages: {
      files: {
        'dist/': ['templates/pages/*.hbs']
      }
    }
  }
})
```

## Boilerplate Author

**Jon Schlinkert**

+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)
+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Use [Assemble][assemble] to build and maintain your gh-pages, blog or documentation. Lint and test your code using [Grunt](http://gruntjs.com/).



[download]: https://github.com/assemble/boilerplate-site/archive/master.zip
[assemble]: https://github.com/assemble/assemble/
[boilerplate-site]: https://github.com/assemble/boilerplate-site

[wiki]: https://github.com/assemble/assemble/wiki
[layouts]: https://github.com/assemble/assemble/wiki/layouts
[partials]: https://github.com/assemble/assemble/wiki/partials
[data]: https://github.com/assemble/assemble/wiki/data

[gruntfile]: http://gruntjs.com/sample-gruntfile
[configuring tasks]: http://gruntjs.com/configuring-tasks
[tasks-and-targets]: http://gruntjs.com/configuring-tasks#task-configuration-and-targets
[files-object]: http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
