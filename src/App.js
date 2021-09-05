import './App.css';
import React, {Component} from 'react';
import TodoList from "./TodoList"
import {Link, Route, Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link to="/" style={{textDecoration: "none"}}>todoList</Link>
        </h1>
        <p>
          <Link to="/tasks">View tasks</Link>
        </p>
        <p>
          <Link to="/tasks/new">Add new task</Link>
        </p>
        <Route path="/tasks" component={TodoList} />
        {/* <Route exact path="/" render={()=><Redirect to="/tasks" />} /> */}
      </div>
    )
  }
}

export default App;
