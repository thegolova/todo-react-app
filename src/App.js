import './App.css';
import SearchTask from './Components/SearchTask';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import NavTasks from './Components/NavTasks';
import { Component } from 'react';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        value: "task 1",
        starred: false,
        done: true,
        delete: true
      },
      {
        id: 1,
        value: "task 2",
        starred: true,
        done: false,
        delete: true
      },
      {
        id: 2,
        value: "task 1",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 3,
        value: "task 2",
        starred: false,
        done: true,
        delete: true
      },
      {
        id: 4,
        value: "task 2",
        starred: true,
        done: true,
        delete: true
      },
      {
        id: 5,
        value: "task 2",
        starred: false,
        done: true,
        delete: true
      }
    ],
    nav : "all"
}

handleMarkTask = (id) => {
    this.setState((state) => ({
        tasks: state.tasks.map(item=> {
            if (item.id === id) {
                item.starred = true;
            }
            return item;
        })
    }));
}

handleDoneTask = (id) => {
  this.setState((state) => ({
      tasks: state.tasks.map(item=> {
          if (item.id === id) {
              item.done = true;
          }
          return item;
      })
  }));
}

handleDeleteTask = (id) => {
    this.setState((state) => ({
        tasks: state.tasks.map(item=> {
            if (item.id === id) {
                item.delete = false;
            }
            return item;
        })
    }));
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
        done: false,
        delete: true
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

componentDidUpdate() {
  console.log('update App')
}

render() {

    let todos = {};
    if (this.state.nav === 'all') {
      todos = this.state.tasks;
    } else if (this.state.nav === 'active') {
      todos = this.state.tasks.filter(task => task.done === false)
    } else if (this.state.nav === 'done') {
      todos = this.state.tasks.filter(task => task.done === true)
    }
    console.log(todos);

    return (
      <div className="App">
        <SearchTask />
        <NavTasks handleNavTask={this.handleNavTask}/>
        <AddTask
          handleAddTask={this.handleAddTask}
        />
        <Tasks 
          state={todos}
          handleMarkTask={this.handleMarkTask}
          handleDoneTask={this.handleDoneTask}
          handleDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
