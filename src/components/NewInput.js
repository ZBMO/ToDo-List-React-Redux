import React, { Component } from 'react';


class NewInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      if (event.keyCode === 13) {
        console.log("in newinput comp: " + this.state.value);
        this.props.addTodo(this.state.value);
        this.state.value = '';
      }
    };
    
  
    render() {
      return (
        <div>
          <label>
            New Todo: 
            <input 
                id="todo-input" 
                ref="todo-input"
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                onKeyDown={this.handleSubmit} 
            /> 
          </label>
        </div>
      );
    }
}



export default NewInput;