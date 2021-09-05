import React, {Component} from "react";
import "./TodoForm.css";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onAddTodo(event) {
        event.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({
            task: ""
        });
        this.props.history.push("/tasks");
    }

    onChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {onAddTodo, onChangeInput} = this;
        const {task} = this.state;
        return (
            <form className="todo-form" onSubmit={onAddTodo}>
                <label className="form-label" htmlFor="task">Add a todo:</label>
                <input
                    className="form-input"
                    id="task"
                    name="task"
                    value={task}
                    onChange={onChangeInput}
                />
                <button className="btn">Add</button>
            </form>
        )
    }
}

export default TodoForm;