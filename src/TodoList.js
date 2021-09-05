import React, {Component} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import {connect} from "react-redux";
import {getTodos, addTodo, removeTodo, toggleTodo} from "./actionCreators";
import "./TodoList.css";
import {Route} from "react-router-dom";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handlingAddTodo = this.handlingAddTodo.bind(this);
        this.handlingRemoveTodo = this.handlingRemoveTodo.bind(this);
        this.handlingToggleTodo = this.handlingToggleTodo.bind(this);
    };

    componentDidMount() {
        this.props.getTodos();
    }

    handlingAddTodo(todo) {
        this.props.addTodo(todo)
    }
    
    handlingRemoveTodo(todo) {
        this.props.removeTodo(todo)
    }
    
    handlingToggleTodo(todo) {
        this.props.toggleTodo(todo)
    }
    
    render() {
        const {todos} = this.props;

        let views = <div style={{textAlign: "center"}}>Your tasks...</div>;
        if(todos && todos.length > 0) {
            views = todos.map(todo => (
                <Todo
                    key={`task-${todo._id}`}
                    toggleTodo={this.handlingToggleTodo.bind(this, todo)}
                    removeTodo={this.handlingRemoveTodo.bind(this, todo)}
                    {...todo}
                />
            ));
        }
        
        return (
            <div className="todo-app">
                <Route path="/tasks/new" component={(props) => (
                    <TodoForm {...props} addTodo={this.handlingAddTodo}/>
                )} />
                <Route exact path="/tasks" component={() => (
                    <ul className="todo-list">
                        {views}
                    </ul>
                )} />
            </div>
        )
    }
};

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
};

export default connect(mapStateToProps, {getTodos, addTodo, removeTodo, toggleTodo})(TodoList);