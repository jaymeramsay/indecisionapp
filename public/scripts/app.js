'use strict';

console.log('App is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Sometimes you need something else to decide for you',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'There are no available options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var user = {
    name: 'Jeannie',
    subtitle: 'The story of a complex person',
    age: 34,
    location: 'Atlanta',
    bands: ['PJ Harvey', 'Andreya Trinana', 'The Gun Club']
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    };
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.subtitle && React.createElement(
        'h2',
        null,
        user.subtitle
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location),
    React.createElement(
        'p',
        null,
        'Favorite Music'
    ),
    React.createElement(
        'ol',
        null,
        user.bands.map(function (band) {
            return React.createElement(
                'li',
                null,
                band
            );
        })
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
