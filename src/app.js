class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
   }

   componentDidMount() {
       //fetches data
       try {
           const json = localStorage.getItem('options');
           const options = JSON.parse(json);
    
           if (options) {
               this.setState(() => ({ options }))
           }
       } catch (e) {
           // do nothing at all
       }
   }

   componentDidUpdate(prevProps, prevState) {
       //saves data
       if(prevState.options.length !== this.state.options.length) {
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options', json)
       }
   }

   handleDeleteOptions(){
       this.setState(() => ({ options: [] }));
   }

   handleDeleteOption(optionToRemove) {
       this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
       }));
   }

   handlePick() {
       const randonNum = Math.floor(Math.random() * this.state.options.length)
       const option = this.state.options[randonNum]
       alert(option);
   }

   handleAddOption(option) {
       console.log(this.state.options.indexOf(option))
        if(!option) {
            return 'Please enter a valid option value.'
        }   else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
   }

    render () {
        const title = 'Indecision App';
        const subtitle = 'Sometimes you need something else to decide';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    handleAddOption={this.handleAddOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

//stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>} 
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }
    //there's a method here with the same name as the method in the parent component. can get confusing
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error })); //same as error:error
        
        if (!error) {
            e.target.elements.option.value = '';
        }

   }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/> 
                <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));