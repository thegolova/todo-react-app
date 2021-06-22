import { Component } from 'react';
import style from './Task.module.css';
import {ReactComponent as DelIcon} from '../delete1.svg';
import {ReactComponent as StarredIcon} from '../star1.svg';
import {ReactComponent as DoneIcon} from '../done.svg';
import {ReactComponent as MarkIcon} from '../mark.svg';

class Task extends Component {
    starredTask = (id) => {
        this.props.handleMarkTask(this.props.task.id);
    }

    doneTask = (id) => {
        this.props.handleDoneTask(this.props.task.id);
    }

    deleteTask = (id) => {
        this.props.handleDeleteTask(this.props.task.id);
    }

    render() {
        const isDelete = this.props.task.delete;
        const isDone = this.props.task.done;
        const isStarred = this.props.task.starred;

        return isDelete && (
            <div className={style.item}> 
                {isStarred && <MarkIcon className={style.done_task}/>}
                <span className={`
                    ${style.value} ${isDone && style.line_through}`}> {this.props.value}
                </span>
                <StarredIcon className={style.star} onClick={ this.starredTask }/>
                <DoneIcon className={style.done} onClick={ this.doneTask }/>
                <DelIcon className={style.del} onClick={ this.deleteTask }/>
            </div>
        )
    }
}

export default Task;