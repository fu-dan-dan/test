import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  todoDelete = (id)=>{
    return()=>{
      this.props.todoDelete(id)
      

    }

  }
  changeDone = (id)=>{
    return(event)=>{
      console.log(id,event);
      this.props.changeDone(id,event.target.checked)

    }

  }
  render() {
    return (
      <div>
        <div className='todo_item'>
            <input type="checkbox" defaultChecked={this.props.todo.ck} onChange={this.changeDone(this.props.todo.id)}/>
            <span>{this.props.todo.name}</span>
            <button onClick={this.todoDelete(this.props.todo.id)}>删除</button>
        </div>
      </div>
    )
  }
}
