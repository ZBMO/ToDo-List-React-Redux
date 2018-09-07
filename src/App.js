import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import NewInput from './components/NewInput';
import Tracker from './components/Tracker';
import InvisiButt from './components/InvisiButt';
import './App.css';

class App extends Component {

  render() {
    
    const { visible, todos, toggleChecked, addTodo, toggleVisible } = this.props
    {console.log("app level: " + this.props.todos)}
    return (
      <div className="App">
        <h1>Things to do</h1>
        
        <TodoList
        todos={todos}
        onClick={toggleChecked}
        visible={visible}
        />

        <NewInput
        addTodo={addTodo}
        />

        <Tracker
        todos={todos}
        />

        <InvisiButt
        visible={visible}
        onClick={toggleVisible}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.visible,
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (t) => dispatch({
      type: 'ADD_TODO', 
      payload: t,
    }),
    toggleVisible: () => dispatch({
      type: 'TOGGLE_VISIBLE'
    }),
    toggleChecked: (i) => dispatch({
      type: 'TOGGLE_CHECKED',
      payload: i,
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
