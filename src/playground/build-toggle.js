let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    renderToggle();
}

const appRoot = document.getElementById('app');

const renderToggle = () => {
    const template = (
        <div>
            <h1>Invisible Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && <p>You show the lights that stop me turn to stone; you shine me when Im alone</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderToggle();