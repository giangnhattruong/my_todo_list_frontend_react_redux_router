export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const GET_TODOS = "GET_TODOS";
const API_URL = "http://localhost:8080/api/todos/"

function handleGetTodos(todos) {
    return {
        type: GET_TODOS,
        todos
    }
}

function handleAdd(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function handleRemove(todo) {
    return {
        type: REMOVE_TODO,
        todo
    }
}

function handleToggle(todo) {
    return {
        type: TOGGLE_TODO,
        todo
    }
}

export function getTodos() {
    return (dispatch) => {
        return fetch(API_URL)
            .then(res => res.json())
            .then(data => dispatch(handleGetTodos(data)))
            .catch(err => console.log("SOMETHING WENT WRONG!", err))
    }
} 

export function addTodo(task) {
    return (dispatch) => {
        return fetch(API_URL, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({task})
        })
            .then(res => res.json())
            .then(data => dispatch(handleAdd(data)))
            .catch(err => console.log("Something went wrong!, ", err))
    }
} 
export function removeTodo(todo) {
    return (dispatch) => {
        return fetch(`${API_URL}${todo._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => dispatch(handleRemove(data)))
            .catch(err => console.log("Something went wrong!, ", err))
    }
} 
export function toggleTodo(todo) {
    let completed = !todo.completed;
    return (dispatch) => {
        return fetch(`${API_URL}${todo._id}`, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({completed})
        })
            .then(res => res.json())
            .then(data => dispatch(handleToggle(data)))
            .catch(err => console.log("Something went wrong!, ", err))
    }
} 