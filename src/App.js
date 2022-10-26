import React from "react";
import "./App.css";
import {nanoid} from "nanoid"
import Hander from "./components/Hander";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        name: "睡觉",
        ck: false,
      },
      {
        id: 2,
        name: "吃饭",
        ck: true,
      },
      {
        id: 3,
        name: "大代码",
        ck: false,
      },
    ],
  };
  a = (ab) => {
    let obj = {id:nanoid(),name:ab,ck:false}
    let newTodoList = [obj,...this.state.todoList]
    this.setState({todoList:newTodoList})
  };
  todoDelete = (id)=>{
    let newTodoList = this.state.todoList.filter(item=>item.id !== id)
    console.log(newTodoList,'new');
    this.setState({todoList:newTodoList})

  }
  changeDone = (id,done)=>{
    console.log(id,done);
    // return(){
     let newArr = this.state.todoList.map(item=>{
       if(item.id === id){
        return {...item,ck:done}
        }else{
          return item
        }
      })
      console.log(newArr);
      this.setState({todoList:newArr})
      console.log(this.state.todoList,'todo');
      let accomplishTodo = this.state.todoList.filter(item=>item.ck === true).length
      console.log(accomplishTodo,'&&');


    // }
  }

  render() {
    return (
      <div>
        <Hander a={this.a} />
        <List todoList={this.state.todoList} todoDelete = {this.todoDelete} changeDone={this.changeDone}/>
        <Footer todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
