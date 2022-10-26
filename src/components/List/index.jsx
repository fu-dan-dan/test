import React, { Component } from 'react'
import Item from "../Item"

export default class List extends Component {
  render() {
    return (
      // <div>
        this.props.todoList.map(item=>{
          return (
            <div>
              <Item todo={item} key={item.id} todoDelete={this.props.todoDelete} changeDone = {this.props.changeDone}/>

            </div>
          )
        })
        // <Item/>
      // </div>
    )
  }
}
