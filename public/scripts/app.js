'use strict';

console.log('App is running!');

var template = React.createElement(
  'p',
  null,
  'This is jsx from my app.js file'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
