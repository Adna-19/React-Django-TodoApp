import React, { Component } from 'react'

class TodoItem extends Component {

  getItemStyle = () => {
    // CONDITIONAL STYLING
    return {
      textDecoration: this.props.todo.completed? "line-through": "none",
      color: this.props.todo.completed? "#989898": "black",
      cursor: "pointer"
    }
  }

  render() {
    return (
      <li className="list-group-item text-start">
        <span 
          style={this.getItemStyle()}
          onClick={this.props.markComplete.bind(this, this.props.todo)}
          >
          {this.props.todo.title}
        </span>

        <span className="float-end">
          <button 
            className="btn btn-sm btn-primary me-2"
            onClick={this.props.editItem.bind(this, this.props.todo)}
          >edit</button>
          <button 
            className="btn btn-sm btn-danger"
            onClick={this.props.deleteItem.bind(this, this.props.todo)}
          >delete</button>
        </span>
      </li>
    )
  }
}

export default TodoItem;