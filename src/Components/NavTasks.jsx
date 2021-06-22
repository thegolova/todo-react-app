import { Component } from "react";
import style from './NavTasks.module.css';
import NavItem from "./NavItem";

class NavTasks extends Component {
    
    render() {
        return (
            <div className={style.nav}>
                <NavItem name="All" handleNavTask={this.props.handleNavTask}/>
                <NavItem name="Active" handleNavTask={this.props.handleNavTask}/>
                <NavItem name="Done" handleNavTask={this.props.handleNavTask}/>
            </div>
        )
    }
}

export default NavTasks;