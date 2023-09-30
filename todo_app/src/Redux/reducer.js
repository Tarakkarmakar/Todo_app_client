import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SET_TODOS,
  } from './action';
  
  const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO :
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
  
        case REMOVE_TODO :
            return {
              ...state,
              todos: state.todos.filter((todo) => todo._id !== action.payload), // Use _id
            };
          
            case UPDATE_TODO :
                return {
                  ...state,
                  todos: state.todos.map((todo) =>
                    todo._id === action.payload._id ? action.payload : todo
                  ),
                };
  
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  