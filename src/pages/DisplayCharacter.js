import React, { Component } from "react";
import Character from "../components/CharacterInfo";
import Job from "../components/Job";
import SearchBar from "../components/SearchBar";
import "./styles/DisplayCharacter.css";

class ShowCharacter extends Component {
  state = {
    displayCharacter: false,
  };
  fetchData = async (query) => {
    const FFXIV = "https://xivapi.com/";
    const url = FFXIV + query;
    const response = await fetch(url);
    return response.json();
  };
  componentDidMount() {}

  // const servers_list = getData("servers");
  // servers_list.then((response) => {
  //   response.forEach((element) => {
  //     const option = document.createElement("option");
  //     option.setAttribute("value", element);
  //     $server_list.append(option);
  //   });
  // });

  render() {
    if (this.state.displayCharacter === true) {
      const servers = async () => this.fetchData("servers");
      return <SearchBar servers={servers} />;
    }
    return (
      <React.Fragment>
        <main className="CharacterDisplay">
          <Character />
          <Job />
        </main>
      </React.Fragment>
    );
  }
}

export default ShowCharacter;
