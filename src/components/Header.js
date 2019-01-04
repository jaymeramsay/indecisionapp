import React from 'react';


//stateless functional component
const Header = (props) => (
    <div className="header">
        <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
 )

export { Header as default };