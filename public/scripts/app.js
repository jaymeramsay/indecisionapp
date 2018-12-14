'use strict';

console.log('App is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Sometimes you need something else to decide for you',
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

var onRemoveAllOptions = function onRemoveAllOptions() {
    app.options = [];
    renderIndecisionApp();
};

var appRoot = document.getElementById('app');

var renderIndecisionApp = function renderIndecisionApp() {
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
            'button',
            { onClick: onRemoveAllOptions },
            'Remove All Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
