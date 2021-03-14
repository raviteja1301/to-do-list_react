import React from "react";
import TodoItems from "./todoItems";
import "./style.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  addItem = e => {
    e.preventDefault();
    var value = e.target[0].value;
    document.getElementById("text").value = "";
    console.log(value);
    if (value !== "") {
      var newItem = {
        text: value,
        key: Date.now()
      };

      console.log(newItem);

      this.setState({ items: [...this.state.items, newItem] });
      console.log(this.state.items);
      console.log("Item Added Successfully");
    }
  };

  deleteItem = key => {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="todoList">
        <h1>Todo List</h1>
        <div className="inputBox">
          <form onSubmit={this.addItem} id="form">
            <input placeholder="Add Task" id="text" />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
