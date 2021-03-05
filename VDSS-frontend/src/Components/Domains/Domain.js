import React from "react";
import { DigitalIcon, MobileIcon, RocketIcon } from "../Icons";
import { domainContent } from "./constant";
import "./Domains.scss";

function Domain() {
  const DomainCard = (data) => {
    return (
      <div className="card">
        <div className="card__icon">{data.icon}</div>
        <div className="card__head">
          <h3>{data.title}</h3>
        </div>
        <div className="card__content">
          <p>{data.descp}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="domain_outer">
        <p className="domain_heading">Domains</p>
        <div className="card_outer">
          {domainContent.map((item, i) => DomainCard(item))}
        </div>
      </div>
      <div className="process">
        <p className="process_heading">Our Process</p>
        <div className="process_steps">
          <div className="process_steps--ele">
            <div className="steps_icon">
              <span>1</span>
              <DigitalIcon />
            </div>
            <h4>Research & Analysis</h4>
          </div>
          <div className="process_steps--ele">
            <div className="steps_icon">
              <span>2</span>
              <RocketIcon />
            </div>
            <h4>Design & Development</h4>
          </div>
          <div className="process_steps--ele">
            <div className="steps_icon">
              <span>3</span>
              <MobileIcon />
            </div>
            <h4>Testing & Deployement</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Domain;
