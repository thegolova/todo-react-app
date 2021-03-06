import { Component } from "react";
import style from './SearchTask.module.css';
import logo from '../logo.png';

class SearchTask extends Component {
  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({
      value : event.target.value
    });
    this.props.hadnleSearch(event.target.value.toLowerCase())
  }

  render() {
    return (
      <div className={style.header}>
        <img 
          src={logo}
          alt="logo"
          className={style.logo}
        />
        <input 
          type='text'
          className={style.search}
          placeholder="Search"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchTask;