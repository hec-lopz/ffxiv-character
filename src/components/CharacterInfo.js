import React, { Component } from "react";
import "./styles/Character.css";

class Character extends Component {
  render() {
    console.log(this.props.character);

    return (
      <React.Fragment>
        <section className="character">
          <div className="character__info">
            <figure className="character__avatar">
              <img src={this.props.character.Avatar} alt="" />
            </figure>
            <div className="character__name-container">
              <h1 className="character__name">{this.props.character.Name}</h1>
              <div className="character__location">
                <div className="character-fc">Michis y Lomitos</div>
                <div className="character-server">
                  {this.props.character.Server}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Character;
