console.log('App.js is running!');

// if statements
// ternary operators
// logical and operators

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options"

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

// JSX - Javascript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your option' : 'No Options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
</div>
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age>= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);