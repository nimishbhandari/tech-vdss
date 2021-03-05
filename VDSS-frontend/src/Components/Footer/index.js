import React from "react";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MarkerIcon,
  PhoneIcon,
  TwitterIcon,
} from "../Icons";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__section">
            <div className="footer__left">
              <h1>VDSS</h1>

              <div className="social">
                <div className="social__icon">
                  <FacebookIcon />
                </div>
                <div className="social__icon">
                  <TwitterIcon />
                </div>
                <div className="social__icon">
                  <InstagramIcon />
                </div>
                <div className="social__icon">
                  <LinkedinIcon />
                </div>
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__right--item map">
                <MarkerIcon />
                <h3>Visit our office</h3>
                <p>Fremont</p>
                <p>USA, 94555</p>
              </div>
              <div className="footer__right--item">
                <EmailIcon />
                <h3>Email Us</h3>
                <p>vdsstechnologies@gmail.com</p>
              </div>
              <div className="footer__right--item">
                <PhoneIcon />
                <h3>Let's Connect</h3>
                <p> +1 408 455 5932</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
