console.log('App.js is running!');

// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
</div>
);

var templateTwo = (
  <div>
    <h1>Leopold Kwok</h1>
    <p> Age: 26</p>
    <p> Location: Philadelphia</p>
</div>
);

// Create a templateTwo var JSX expression
// div
// h1 -> Leopold Kwok
// p -> Age: 26
// p -> Location: Philadelphia
// Render templateTwo instead of template

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);