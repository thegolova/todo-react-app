import { Component } from "react";
import style from './NavItem.module.css';



class NavItem extends Component {

    activeTask = () => {
        this.props.handleNavTask(this.props.name.toLowerCase());
    }

    render() {
        return (
            <div className={style.item} onClick={ this.activeTask }>
                {this.props.name}
            </div>
        )
    }
}

export default NavItem;