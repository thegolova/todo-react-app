import { Component } from "react";
import style from './NavTasks.module.css';
import NavItem from "./NavItem";

class NavTasks extends Component {
    render() {
        return (
            <div className={style.nav}>
                <NavItem name="All"/>
                <NavItem name="Active"/>
                <NavItem name="Done"/>
            </div>
        )
    }
}

export default NavTasks;