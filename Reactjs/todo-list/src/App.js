import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.todoItems=[
      {title: 'Đi chơi'},
      {title: 'Đi học'},
      {title: 'Đi ngủ'}
    ];
  }
  render() {
    return (
      <div className="App">
          {
            this.todoItems.map((item,index)=> 
            <TodoItem key={index} title={item.title} />
          )

          }
      </div>
    );
  }
}


export default App;
