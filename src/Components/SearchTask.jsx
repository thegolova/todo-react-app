import { Component } from "react";
import style from './SearchTask.module.css';
import logo from '../logo.png';

class SearchTask extends Component {
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
        />
      </div>
    )
  }
}

export default SearchTask;