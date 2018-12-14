console.log('App is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Sometimes you need something else to decide for you',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
}

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no available options'}</p>
            <button onClick={onRemoveAllOptions}>Remove All Options</button>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
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