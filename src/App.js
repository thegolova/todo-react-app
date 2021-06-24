import './App.css';
import SearchTask from './Components/SearchTask';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import NavTasks from './Components/NavTasks';
import { Component } from 'react';

class App extends Component {
  state = {
    tasks: [],
    nav: "all",
    search: ""
  }

constructor(props) {
  super(props);
  if (localStorage.getItem("TASKS") !== null) {
    this.state = JSON.parse(localStorage.getItem("TASKS"));
  }
}

handleMarkTask = (id) => {
    this.setState((state) => ({
        tasks: state.tasks.map(item=> {
            if (item.id === id) {
                item.starred = !item.starred;
            }
            return item;
        })
    }));
}

handleDoneTask = (id) => {
  this.setState((state) => ({
      tasks: state.tasks.map(item=> {
          if (item.id === id) {
              item.done = !item.done;
          }
          return item;
      })
  }));
}

handleDeleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter(item => item.id !== id)
    }))
}

handleAddTask = (task) => {
  let newId = 0;
  if (this.state.tasks.length !== 0) {
    newId = this.state.tasks[this.state.tasks.length - 1].id + 1;
  }
  this.setState(prevState => ({
    tasks: [...prevState.tasks, 
      {
        id: newId,
        value: task,
        starred: false,
        done: false
      }
    ]
  }))
}

handleNavTask = (action) => {
  switch (action) {
    case 'all' : 
      return this.setState({nav : "all"});
    case 'active' : 
      return this.setState({nav : "active"});
    case 'done' : 
      return this.setState({nav : "done"});
    default :
      return this.setState({nav : "all"});
  }
}

hadnleSearch = (value) => {
  this.setState({search: value})
}

getSearchTodos = (value) => {
  return this.state.tasks.filter(task => {
    return task.value.toLowerCase().includes(value)
  })
}

getTodos = () => {
  let todos = null;
  let getSearchTasks = this.getSearchTodos(this.state.search);
  if (this.state.nav === 'all') {
    todos = getSearchTasks;
  } else if (this.state.nav === 'active') {
    todos = getSearchTasks.filter(task => task.done === false)
  } else if (this.state.nav === 'done') {
    todos = getSearchTasks.filter(task => task.done === true)
  }
  return todos;
}

componentDidUpdate() {
  localStorage.removeItem('TASKS');
  localStorage.setItem('TASKS', JSON.stringify(this.state));
}

render() {
    return (
      <div className="App">
        <SearchTask hadnleSearch={this.hadnleSearch}/>
        <NavTasks handleNavTask={this.handleNavTask} nav={this.state.nav}/>
        <AddTask
          handleAddTask={this.handleAddTask}
        />
        <Tasks 
          state={this.getTodos()}
          handleMarkTask={this.handleMarkTask}
          handleDoneTask={this.handleDoneTask}
          handleDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
