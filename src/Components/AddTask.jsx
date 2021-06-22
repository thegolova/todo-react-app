import style from './AddTask.module.css';
import { Component } from "react";

class AddTask extends Component {
    state = {
        value: ""
    }
    
    handleTextAreaChange = (event) => {
        this.setState( {
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const task = this.state.value;
        if (task !== "" && task != null) {
            this.props.handleAddTask(task);
            this.setState({
                value: ""
            });
        }
    }

    render() {
        return (
            <div>
                <form 
                    className={style.addTask}
                    onSubmit= {this.handleSubmit}
                >
                    <textarea 
                        className={style.textArea}
                        value = {this.state.value}
                        onChange={this.handleTextAreaChange}
                    />
                    <input
                        type='submit'
                        className={style.btn}
                        value="ADD"
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default AddTask;