import React, { Component } from 'react';

class Tracker extends React.Component {
    render () {
        let counter = (this.props.todos.filter(val => {return val.checked === false})).length
        return(
        <div>
        
        Number of ToDos: <span id="todos-left">{counter}</span>
        

        
        </div>
        );
      }
}


export default Tracker;