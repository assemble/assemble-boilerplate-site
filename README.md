# assemble-examples-basic

> [Assemble][assemble] is a Grunt plugin that makes it dead simple to build modular sites, blogs, components or docs from reusable **templates** and **data**.


This example demonstrates using Assemble to build a simple using:
* A layouts
* Pages
* Partials
* YAML Front-Matter
* Markdown content


## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile][gruntfile], as well as install and use Grunt plugins. 

* **[Download the project][download]** and unzip it into a new folder.
* In the project folder, run `npm install` to install [Assemble][assemble], [Grunt](http://gruntjs.com/) and any other dependencies.
* Once the dependencies are installed you may run `grunt assemble` to build the example project.


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
      partials: ['templates/partials/*.hbs']
    },
    // Files to build into pages
    pages: {
      files: {
        'dist/': ['templates/pages/*.hbs']
      }
    }
  }
})
```

## Options
This section describes the options used in the example. If are not yet familiar with Grunt.js, you might be able to "get by" on this documentation alone since Assemble is simple to run, but please consider visiting the Grunt documentation to learn more about [configuring tasks][configuring-tasks] and all of the things you can do. 

#### `flatten`
Type: `Boolean`
Default: `false`

This is useful for ensuring that pages are "flattened" into the same destination dir when they are are generated from different source folders. See [building the files object dynamically][files-object] for more information on files formats.


#### `layout`
Type: `String` (optional)
Default: `undefined`

If set, this defines the layout file to use for that [target][tasks-and-targets]. Unlike Jekyll, Assemble requires a file extension since you are not limited to using a single file type.


#### partials
Type: `Object` (optional)
Parameters: `Object|Array`
Default: `undefined`

Specifies the Handlebars partials files, or paths to the directories of files to be used. 


#### `assets`
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.


#### `partials`
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

 patterns to define 
Also note that globbing (see [minimatch](https://github.com/isaacs/minimatch)) and Lodash (underscore) templates can be use with every option.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  bootstrap: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  bootstrap: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Use [Assemble][assemble] to build and maintain your gh-pages, blog or documentation. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2013-04-15    v0.1.0    First commit. 
 

<!-- assemble links -->

[assemble]: https://github.com/assemble/assemble/
[download]: https://github.com/assemble/assemble-examples-basic/archive/master.zip


<!-- grunt links -->

[gruntfile]: http://gruntjs.com/sample-gruntfile
[configuring tasks]: http://gruntjs.com/configuring-tasks
[tasks-and-targets]: http://gruntjs.com/configuring-tasks#task-configuration-and-targets
[files-object]: http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically