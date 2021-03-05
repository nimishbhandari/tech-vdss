import React from "react";
import "./About.scss";
import {
  BuildingIcon,
  DevelopSvg,
  LaptopIcon,
  PhoneIcon,
  PortfolioSvg,
  SmileIcon,
} from "../Icons";
function About() {
  return (
    <div className="About_wrapper">
      <p className="About_heading">About Us</p>
      <div className="About_outer">
        <div className="About_left">
          <p className="p_left">
            The entire world has gone digital and all the services are
            accessible through various online platforms. Whether it might be
            getting your car serviced or shopping; all we look for are services
            that are just a tap away. So, why not let the customer connect to
            your company this easily? Nowadays, the consumer would first like to
            explore the company and its services digitally before any physical
            interaction. We thus cater in creating this first impression for
            you! <br />
            <br /> Even with a plethora of services available to digitize
            business, the small business owners often find it difficult to find
            themselves a cost-effective yet an efficient solution that provides
            value for their money. This is where we come to the rescue. We build
            your online presence and market the company and hence, are the best
            investment you would make that would help your business to grow.{" "}
            <br /> <br /> Our goal is to reach out to community businesses,
            family businesses, small businesses and new businesses to open up
            the digital world for their business at the lowest possible cost.{" "}
            <br /> <br /> We are entirely committed to your business growth. We
            shall not only help you in building a website but rather provide a
            comprehensive solution so that you could mark your digital presence.
            We will help you to maintain your digital profile and market the
            company on various
          </p>
          <p className="p_left">
            {/* A consumer, whether he is a car owner, willing to go to a garage for
            regular service, or a shopper doing online searches, would like to
            explore the online presence of such businesses and their offerings
            before he or she would physically be visiting the place. We have
            seen that despite so many services available today which claim to
            digitize business, most of the small business owners are finding it
            very difficult to make them online.{" "} */}
          </p>
          <p className="p_left">
            {/* Such difficulties are coming from their lack of understanding on to
            what extent they should invest before they see value is coming from
            this investment. */}
          </p>
        </div>
        <div className="About_right">
          <div className="About_right_img">
            <DevelopSvg />
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio__left">
          <div className="img">
            <PortfolioSvg />
          </div>
        </div>
        <div className="portfolio__right">
          <span className="portfolio__right__element">
            <SmileIcon />
            <div className="ele__left">
              <h2>2+</h2>
              <p>Happy Clients</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <LaptopIcon />
            <div className="ele__left">
              <h2>1</h2>
              <p>Project Delivered</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <BuildingIcon />
            <div className="ele__left">
              <h2>1</h2>
              <p>Successful Year</p>
            </div>
          </span>
          <span className="portfolio__right__element">
            <PhoneIcon />
            <div className="ele__left">
              <h2>24*7</h2>
              <p>Support</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
