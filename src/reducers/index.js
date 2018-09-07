

export const reducer = (state = 
    {visible: true, 
    todos: [] 
    },
        action) => {

switch (action.type) {
    case 'TOGGLE_VISIBLE':
        {
            console.log("toggle vis reached")
            return {...state, 
            visible: !state.visible}
        }
    case 'ADD_TODO': 
        {
        return {...state, 
            todos: state.todos.concat({
                checked: false,
                description: action.payload
            })}    
        }
    case 'TOGGLE_CHECKED':
        {
            return {...state,
                todos: state.todos.map((todo, i) => { 
                    if (i === action.payload) {
                        return {
                            checked: !todo.checked,
                            description: todo.description,
                        };
                    } return todo  
                })       
            }
        }
    

    default: {
        console.log('Unhandled action', action.type);
        return state;
    }
}
}