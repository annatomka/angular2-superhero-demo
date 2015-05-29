# Angular2 Superhero Demo

This is a simple Angular 2.0.0-alpha.25 example based on the tutorial from angular.io.

## Installation

Install tsc compiler to compile TypeScript:

```
$ npm install typescript@^1.5.0-beta -g 
```

Install simple command-line http-server:
```
$ npm install http-server -g
```

## How to use

Compile code and watch for changes: 
```
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata *.ts
```

Start local http server run the following command in the root directory of the application: 

```
$ http-server -c-1
```
*With the option -c-1 you can disable cache.*

You can see the application in action in this [Demo](https://batmanvsuperman.firebaseapp.com).
