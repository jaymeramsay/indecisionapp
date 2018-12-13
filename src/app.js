console.log('App is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Sometimes you need something else to decide for you',
    options: ['one', 'two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no available options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Jeannie',
    subtitle: 'The story of a complex person',
    age: 34,
    location: 'Atlanta',
    bands: [
        'PJ Harvey',
        'Andreya Trinana',
        'The Gun Club'
    ]
}

function getLocation (location) {
    if(location) {
        return <p>Location: {location}</p>;
    };   
}
const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous'}</h1>
        {user.subtitle && <h2>{user.subtitle}</h2>}
        { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        <p>Favorite Music</p>
        <ol>
            {user.bands.map(band => <li>{band}</li>)}
        </ol>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);