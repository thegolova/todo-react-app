import { Component } from "react";
import style from './NavItem.module.css';

class NavItem extends Component {
    render() {
        return (
            <div className={style.item}>
                {this.props.name}
            </div>
        )
    }
}

export default NavItem;