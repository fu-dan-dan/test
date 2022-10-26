import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <input type="checkbox" />
        <span>已完成{this.props.todoList.filter(item=>item.cd === true)}/全部{this.props.todoList.length}</span>
        <button>清楚已完成任务</button>
      </div>
    )
  }
}
