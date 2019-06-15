'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Leopold Kwok'
  ),
  React.createElement(
    'p',
    null,
    ' Age: 26'
  ),
  React.createElement(
    'p',
    null,
    ' Location: Philadelphia'
  )
);

// Create a templateTwo var JSX expression
// div
// h1 -> Leopold Kwok
// p -> Age: 26
// p -> Location: Philadelphia
// Render templateTwo instead of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
