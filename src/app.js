console.log('App is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Sometimes you need something else to decide for you',
    options: ['one', 'two']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
}

const onRemoveAllOptions = () => {
    app.options = [];
    renderIndecisionApp();
}

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no available options'}</p>
            <button onClick={onRemoveAllOptions}>Remove All Options</button>
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/> 
            <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

renderIndecisionApp();