class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Invisible Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>Oh, you know it feels good, feels good, feels good.</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility
//     renderToggle();
// }

// const appRoot = document.getElementById('app');

// const renderToggle = () => {
//     const template = (
//         <div>
//             <h1>Invisible Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && <p>You show the lights that stop me turn to stone; you shine me when Im alone</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderToggle();