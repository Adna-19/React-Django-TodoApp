import React, { Component } from 'react'
import TodoItem from './TodoItem'
import csrftoken from './Cookie'

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      activeItem: {
        id: null,
        title: "",
        completed: false
      },
      editing: false
    }
  }

  componentDidMount() {
    this.fetchDataFromBackend();
  }

  fetchDataFromBackend = () => {
    const url = 'http://127.0.0.1:8000/api/task-list/'
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({todos:data}))
  }

  onChange = (e) => {
    this.setState({activeItem: {...this.state.activeItem, title: e.target.value}})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.addItemToBackend();
  }

  addItemToBackend = () => {
    const url = this.state.editing? `http://127.0.0.1:8000/api/task-update/${this.state.activeItem.id}/`: 'http://127.0.0.1:8000/api/task-add/'
    console.log(this.state.activeItem, 'IN BACKEND ITEM SERVICE')
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(this.state.activeItem)
    })
    .then(response => {
      if(this.state.editing) {
        console.log('Item updated successfully')
      } else {
        console.log('Item added successfully')
      }
      this.setState({
        activeItem: {
          id: null,
          title: "",
          completed: false
        },
        editing: !this.state.editing
      })
      this.fetchDataFromBackend();
    })
  }

  deleteItem = (todo) => {
    // delete from backend and frontend
    const url = `http://127.0.0.1:8000/api/task-delete/${todo.id}/`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(todo)
    })
    .then(response => {
      console.log('Item deleted successfully...')
      this.fetchDataFromBackend();
    })
  }

  editItem = (todo) => {
    // edit specific selected item
    this.setState({activeItem: todo, editing: true})
  }

  markComplete = (todo) => {
    // mark an item as completed
    const newTodo = {
      ...todo,
      completed: !todo.completed
    }

    const url = `http://127.0.0.1:8000/api/task-update/${newTodo.id}/`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(newTodo)
    })
    .then(response => {
      console.log('Item marked completed successfully')
      this.fetchDataFromBackend();
    })
  }

  render() {
    return (
      <div className="container">
        <br />
        <form onSubmit={this.onSubmit} style={{display: "flex", marginBottom: "20px"}}>
          <input 
            type="text"
            className="form-control"
            placeholder="Add new item..."
            onChange={this.onChange}
            value={this.state.activeItem.title}
            style={{flex: "10"}}
          />

          <input
            type="submit"
            value="Add"
            className="btn btn-success"
            style={{flex: "2"}}
          />
        </form>

        <ul className="list-group">
          {this.state.todos.map(todo => {
            return (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                markComplete={this.markComplete}
              />)
          })}
        </ul>
      </div>
    )
  }
}

export default Todos;