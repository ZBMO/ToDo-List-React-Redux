import React, { Component } from 'react';

class TodoList  extends React.Component {
    render () {
        const { visible } = this.props
        function visibilityClassName(bool) {
            if (visible === false) {
                if (bool === true) {
                    return "todo hideme";
                } else {
                    return "todo";
                }
            }   else {
                    if (bool === true) {
                        return "todo complete";
                    } else {
                        return "todo";
                    }
                }
        }
        return(
          <div>
 
            {console.log(this.props.todos)}
            {this.props.todos.map((todo, i) => 
              <div
                
                className = {visibilityClassName(todo.checked)} 
                    
                  
                
                //{todo.checked ? "todo complete" : "todo"}
                key={i}
                id={i}
                onClick={() => this.props.onClick(i)}>
                  <input 
                    type ="checkbox" 
                    className="todo-checkbox" 
                    checked={todo.checked}
                  />
                  <span 
                      className="todo-text">
                      {todo.description}
                  </span>
              </div>)
            }

          </div>
        );
      }
}


export default TodoList;