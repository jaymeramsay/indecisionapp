import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    //there's a method here with the same name as the method in the parent component. can get confusing
    handleAddOption = (e) => {
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
