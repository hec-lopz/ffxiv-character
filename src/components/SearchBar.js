import React, { Component } from "react";
import "./styles/SearchBar.css";

class SearchBar extends Component {
  render() {
    console.log(this.props.error);
    return (
      <div className="SearchBar-container">
        <form className="SearchBar" name="search_params" action="#">
          <input
            type="text"
            className="SearchBar__input"
            id="search-bar"
            placeholder="Name"
            name="name"
          />
          <input
            className="SearchBar__input"
            name="server"
            list="servers"
            placeholder="Server"
          />
          <datalist id="servers">
            {this.props.servers.map((server, i) => (
              <option key={i} value={server}></option>
            ))}
          </datalist>
          {this.props.error && (
            <p className="SearchBar__Warning">{this.props.error}</p>
          )}
          <button onClick={this.props.onSubmit} className="SearchBar__btn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
