import React, { Component } from "react";
import "./styles/Character.css";

class Character extends Component {
  render() {
    return (
      <section className="character">
        <section className="character__info">
          <figure className="character__avatar">
            <img src="" alt="" />
          </figure>
          <div className="character__name-container">
            <h1 className="character__name">Sophia Moonlight</h1>
            <div className="character__location">
              <div className="character-fc">Michis y Lomitos</div>
              <div className="character-server">Lamia</div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Character;
