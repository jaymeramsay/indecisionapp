import React from 'react';


//stateless functional component
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
 )

export { Header as default };