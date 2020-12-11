import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form name="search_params" action="#">
        <label for="search-bar">Introduce el nombre de tu personaje: </label>
        <input type="text" class="search-bar" id="search-bar" />
        <label for="server">Servidor</label>
        <input name="server" list="servers" placeholder="Servidor" />
        <datalist id="servers">{this.props.servers.map()}</datalist>
        <button>Buscar</button>
      </form>
    );
  }
}

export default SearchBar;
