import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);
  }

  createTasks = item => {
    return (
      <li key={item.key}>
        {item.text}
        <button onClick={() => this.delete(item.key)}> Delete</button>
      </li>
    );
  };

  delete = key => {
    this.props.delete(key);
  };
  
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
