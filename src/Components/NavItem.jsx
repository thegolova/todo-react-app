import { Component } from "react";
import style from './NavItem.module.css';

class NavItem extends Component {
    activeTask = () => {
        this.props.handleNavTask(this.props.name.toLowerCase())
        this.props.handleActivePage(this.props.name);
    }

    isActive = () => {
        return this.props.isActive ? style.active : ""
    }

    render() {
        return (
            <div 
                className={style.item + " " + this.isActive()}
                onClick={ this.activeTask }
            >
                {this.props.name}
            </div>
        )
    }
}

export default NavItem;