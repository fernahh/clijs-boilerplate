# CLI.js Boilerplate

> A boilerplate to build CLIs with JavaScript. No transpilers, just JavaScript.

## Why?

CLIs are cool and useful. JavaScript is awesome and the [most popular programming language of world](http://stackoverflow.com/research/developer-survey-2016#technology). But, how to develop scalable and testable tools? What are the standards to be followed?

This project is a result of studies, based on experiencies and the [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy).

## Getting started

Choose a option:

1. [Clone the repo](https://github.com/fernahh/clijs-boilerplate.git) or...
2. Download last [release](https://github.com/fernahh/clijs-boilerplate/archive/master.zip).

## Structure

The structure is simple:

```
├── bin/
│   └── app
├── doc/
│   └── help.txt
├── src/
|   ├── helpers/
|   |   └── log-error.js
|   ├── modules/
|   |   └── help.js
│   └── app.js
├── test/
│   └── help.test.js
├── .editorconfig
├── .gitignore
├── cli.js
├── package.json
└── README.md
```

### [bin/](https://github.com/fernahh/clijs-boilerplate/tree/master/bin/)

The Node.js packages are based on [CommonJS Packages/1.1](http://wiki.commonjs.org/wiki/Packages/1.1), and this specification says that executable files must be in the directory `/bin`.

### [doc/](https://github.com/fernahh/clijs-boilerplate/tree/master/doc/)

Keep the documentation in external files leaves more flexible, especially if it's large.

### [src/](https://github.com/fernahh/clijs-boilerplate/tree/master/src/)

The main modules, helpers a application file are here.

### [test/](https://github.com/fernahh/clijs-boilerplate/tree/master/test/)

//todo

### [.editorconfig](https://github.com/fernahh/clijs-boilerplate/tree/master/.editorconfig)

//todo

### [cli.js](https://github.com/fernahh/clijs-boilerplate/tree/master/cli.js)

//todo

## Maintainer

Luiz Fernando Rodrigues - http://fernahh.com.br

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
