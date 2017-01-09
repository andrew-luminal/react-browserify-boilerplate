# React Browserify Boilerplate
This boilerplate sets up a very simple React application with live reloading for speedy development. This also allows usage of ES2015 Javascript syntax through babel.

## Installation
First, install the latest version of [Node.js](https://nodejs.org/en/download/).

Then, install `browserify` and `watchify`:
```
npm install -g browserify watchify
```

Finally, install the local packages for this project. Run this from the root of this repository:
```
npm install
```

## Running
Run the following command:
```
watchify -t [ babelify ] -p [ browserify-livereload ] src/index.js -o build/app.js -v
```
