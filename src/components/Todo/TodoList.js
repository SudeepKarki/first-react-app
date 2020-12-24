import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;
