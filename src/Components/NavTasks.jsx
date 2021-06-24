import { Component } from "react";
import style from './NavTasks.module.css';
import NavItem from "./NavItem";

class NavTasks extends Component {
    state = {
        page: ""
    }
    
    handleActivePage = (value) => {
        this.setState({page: value})
    }

    componentDidUpdate() {
        console.log(this.state.page)
    }

    render() {
        return (
            <div className={style.nav}>
                <NavItem 
                    name="All" 
                    handleNavTask={this.props.handleNavTask}
                    nav={this.props.nav}
                    handleActivePage={this.handleActivePage}
                    isActive={"All" === this.state.page}
                />
                <NavItem 
                    className={style.active}
                    name="Active" 
                    handleNavTask={this.props.handleNavTask}
                    nav={this.props.nav}
                    handleActivePage={this.handleActivePage}
                    isActive={"Active" === this.state.page}
                />
                <NavItem 
                    name="Done" 
                    handleNavTask={this.props.handleNavTask}
                    nav={this.props.nav}
                    handleActivePage={this.handleActivePage}
                    isActive={"Done" === this.state.page}
                />
            </div>
        )
    }
}

export default NavTasks;