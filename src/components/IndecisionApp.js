import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    
    handlePick = () => {
        const randonNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randonNum]
        // alert(option);
        this.setState(() => ({
            selectedOption: option
        }));
        console.log(option);
    };
    
    handleAddOption = (option) => {
        console.log(this.state.options.indexOf(option))
        if(!option) {
            return 'Please enter a valid option value.'
        }   else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
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
    };
 
    componentDidUpdate(prevProps, prevState) {
        //saves data
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    };   
    render () {
        const title = 'Indecision App';
        const subtitle = 'Sometimes you need something else to decide';
        
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <div className="container">
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
            <OptionModal 
                handleClearSelectedOption={this.handleClearSelectedOption}
                selectedOption={this.state.selectedOption}
            />
            </div>
        );
    };
    
}
