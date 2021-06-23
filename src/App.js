import './App.css';
import SearchTask from './Components/SearchTask';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import NavTasks from './Components/NavTasks';
import { Component } from 'react';

class App extends Component {
  state = {};

constructor(props) {
  super(props);
  this.state = {
    tasks: [
      {
        id: 0,
        value: "Позвонить в типографию",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 1,
        value: "Закупить товар",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 2,
        value: "Направить договор в юр. отдел",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 3,
        value: "Сделать пост про котов",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 4,
        value: "Написать тексты в 5 форматах",
        starred: false,
        done: false,
        delete: true
      },
      {
        id: 5,
        value: "Найти площадки для размещения",
        starred: false,
        done: false,
        delete: true
      }
    ],
    nav: "all",
    search: ""
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
  /* console.log(todos); */
  return todos;
}


componentDidMount() {
  console.log('mount App');
}


componentDidUpdate() {
  console.log('update App')
}

render() {
    console.log(this.state.search)
    return (
      <div className="App">
        <SearchTask hadnleSearch={this.hadnleSearch}/>
        <NavTasks handleNavTask={this.handleNavTask}/>
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
