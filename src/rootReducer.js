import {GET_TODOS, ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actionCreators";

const initialState = {
    todos: []
}

export default function rootReducer(state=initialState, action) {
    let todos;
    let newState={...state};
    switch(action.type) {
        case GET_TODOS:
            todos = action.todos;
            return {
                ...state,
                todos
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...newState.todos,
                    action.todo
                ]
            };

        case REMOVE_TODO:
            todos = state.todos.filter(todo => todo._id !== action.todo._id);
            return {
                ...state,
                todos
            };

        case TOGGLE_TODO:
            todos = state.todos.map(todo => {
                if(todo._id === action.todo._id) {
                    todo.completed = action.todo.completed;
                    return todo;
                }
                return todo;
            });
            return {
                ...state,
                todos
            };

        default:
            return state;
    }
}