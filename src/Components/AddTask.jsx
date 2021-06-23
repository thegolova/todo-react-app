import style from './AddTask.module.css';
import { Component } from "react";

class AddTask extends Component {
    state = {
        value: ""
    };
    
    handleTextAreaChange = (event) => {
        if (event.code === 'Enter') {
            event.preventDefault();
            alert('enter')
        }
        this.setState( {
            value: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const task = this.state.value;
        if (task !== "" && task != null) {
            this.props.handleAddTask(task);
            this.setState({
                value: ""
            });
        }
    };

    handleEnterPress = (event) => {
        if (event.keyCode === 13) {
            this.handleSubmit(event);
        }
    };

    render() {
        return (
            <div>
                <form 
                    className={style.addTask}
                    onSubmit= {this.handleSubmit}
                    onKeyUp= {this.handleEnterPress}
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
    };
}

export default AddTask;