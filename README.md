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
npm start
```

## Steps from Workshop

### Installing jQuery
To install jQuery, run
```
npm install jquery --save
```

You should now be able to verify that jquery was added to the `dependencies` section of `package.json`.

### Creating a component
To create a component, copy a simple existing component: `src/AppHeader.js`. Change the class name and export reference:
```
class MyNewComponent extends React.Component {
	...
}

export default MyNewComponent;
```
