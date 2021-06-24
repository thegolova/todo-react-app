import { Component } from "react";
import Task from './Task';

class Tasks extends Component {
    render() {
        return (
            <div>
                {
                    this.props.state.map(item => (
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