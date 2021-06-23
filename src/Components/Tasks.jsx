import { Component } from "react";
import Task from './Task';

class Tasks extends Component {
    /* constructor(props) {
        super(props);
        this.state = this.props.state;
    } */

    componentDidUpdate() {
        console.log("update Tasks");
    }

    render() {
        return (
            <div>
                {
                    /* this.state.map(item => ( */
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