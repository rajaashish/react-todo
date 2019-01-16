import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.sate = {
      items: [],
      currentItem: { text: '', key: '' }
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render () {
    return (
      <div className='App'>
        <TodoList addItem={this.addItem} />
      </div>
    )
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }
}

export default App
