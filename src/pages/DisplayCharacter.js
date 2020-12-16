import React, { Component } from "react";
import Character from "../components/CharacterInfo";
import SearchBar from "../components/SearchBar";
import "./styles/DisplayCharacter.css";

class ShowCharacter extends Component {
  state = {
    displayCharacter: false,
    serverList: [],
    characterInfo: [],
    loading: false,
    error: null,
  };
  fetchData = async (query) => {
    const FFXIV = "https://xivapi.com/";
    const url = FFXIV + query;
    const response = await fetch(url);
    return response.json();
  };
  componentDidMount() {
    if (this.state.serverList.length === 0) {
      this.getServers();
      console.log("mount");
    }
  }
  getServers = async () => {
    console.log("Servers");
    const servers = await this.fetchData("servers");
    console.log(servers);
    this.setState({ displayCharacter: false, serverList: servers });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    const name = e.target.form.name.value;
    const server = e.target.form.server.value;
    const query = `character/search?name=${name}&server=${server}`;
    this.setState({ loading: true });
    const data = await this.fetchData(query);
    debugger;
    if (data.Error) {
      this.setState({ loading: false, error: data.Message });
    } else if (data.Pagination.Results === 0) {
      this.setState({
        characterInfo: data.Results,
        loading: false,
        error: "Character not found",
      });
    } else {
      this.setState({
        displayCharacter: true,
        characterInfo: data.Results,
        loading: false,
        error: null,
      });
    }
    e.target.disabled = false;
  };

  render() {
    if (this.state.characterInfo.length === 0) {
      return (
        <main className="CharacterDisplay">
          <SearchBar
            servers={this.state.serverList}
            onSubmit={this.handleSubmit}
            error={this.state.error}
          />
        </main>
      );
      // return <div>{() => console.log(this.state.serverList)}</div>;
    }
    if (this.state.characterInfo.length > 1) {
      return (
        <React.Fragment>
          <SearchBar
            servers={this.state.serverList}
            onSubmit={this.handleSubmit}
            error={this.state.error}
          />
          <main className="CharacterDisplay">
            {this.state.characterInfo.map((character, i) => (
              <Character key={i} character={character} />
            ))}
          </main>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <SearchBar
          servers={this.state.serverList}
          onSubmit={this.handleSubmit}
        />
        <main className="CharacterDisplay">
          <Character character={this.state.characterInfo[0]} />
        </main>
      </React.Fragment>
    );
  }
}

export default ShowCharacter;
