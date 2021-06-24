import { Component } from "react";
import style from './SearchTask.module.css';
import logo from '../logo4.png';

class SearchTask extends Component {
  state = {
    value: ""
  }

  handleChange = (event) => {
    /* console.log(event.target.value); */
    this.setState({
      value : event.target.value
    });
    this.props.hadnleSearch(event.target.value.toLowerCase())
  }

  render() {
    /* console.log(this.state) */
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