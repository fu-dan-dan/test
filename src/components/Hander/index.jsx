import React, { Component } from 'react'
import './index.css'

export default class Hander extends Component {
  add=(event)=>{
    if(event.keyCode !== 13) return
    if(event.target.value === ''){
      alert('不能为空')
      return
    }
    console.log(event);
    this.props.a(event.target.value)
    event.target.value = ''


  }
  render() {
    
    return (
      <div className='hander'>
        <input type="text" onKeyUp={this.add}/>
      </div>
    )
  }
}
