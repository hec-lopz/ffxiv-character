import React, { Component } from "react";
import GearContainer from "./GearContainer";
import "./styles/Job.css";

class Job extends Component {
  render() {
    return (
      <section className="job">
        <GearContainer />
        <div className="job__info">
          <i className="job__icon"></i>
          <h1 className="job__name">black mage</h1>
          <span className="job__level">Level 80</span>
        </div>
        <GearContainer />
      </section>
    );
  }
}

export default Job;
