import React, { Component  }  from 'react';
import TodoItems from './components/TodoItem/TodoItem'
import AddItems from './components/AddItem/AddItem'

class App extends Component {

state={
items:[
  {id:1, name:'Achraf', age:30 },
  {id:2, name:'Khalil', age:29 },
  {id:3, name:'Boha', age:31 }
]
}
deleteItem = (id) => {
  let items= this.state.items.filter(item =>{
    return item.id !==id
  })
  
  this.setState({items})
}
addItem =(item)=>{
item.id = Math.random();
 let items= this.state.items;
 items.push(item);
 this.setState({items})
}
  render() {
    return(
      <div className="App container">
       <h1 className="text-center">TodoList </h1>
       <TodoItems  items={this.state.items} deleteItem={this.deleteItem}/>
       <AddItems  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
