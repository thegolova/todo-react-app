import { Component } from "react";
import Task from './Task';

class Tasks extends Component {
    state = this.props.state;

    render() {
        window.store = this.state;
        return (
            <div>
                {
                    this.state.map(item => (
                        <Task 
                            key={item.id}
                            task={item}
                            value={item.value}
                            handleMarkTask={this.props.handleMarkTask}    
                            handleDoneTask={this.props.handleDoneTask}
                            handleDeleteTask={this.props.handleDeleteTask}    
                        />
                    ))
                }
            </div>
        )
    }
}

export default Tasks;