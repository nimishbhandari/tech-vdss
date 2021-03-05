import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../Button";
import { ClearIcon, ContactSvg, PhoneIcon, SubmitIcon } from "../Icons";
import InputComponent from "../InputComponent";
import "./ContactForm.scss";
import axios from 'axios';

function Contact({ isOpen, setIsOpen }) {

  const [value, setValue] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setMobile] = useState('');
  const [message, setMessage] = useState("");

  const handleRecaptcha = (value) => {
    if (value) {
      setValue(value);
    }
  };

  const handleSubmitContact = () => {
    if(value){
      axios.post(`${process.env.REACT_APP_CONTACT}/getContactForm`, {
        name: name,
        email: email,
        mobile: phoneNum,
        message: message
      })
      .then((res) => {
        if(res.data.response === 1){
          setName('');
          setEmail('');
          setMobile('');
          setMessage('');
          alert("Contact Initiated");
        } else {
          alert("Something Went Wrong");
        }
      })
      .catch((err) => {
        alert("Something Went Wrong")
      })
    } else {
      alert("Please fill the captcha before submitting the form");
    }
  }

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  }
  return (
    <div className={isOpen ? "contact sidebar-open" : "contact"}>
      <div
        className="contact__btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className="contact__btn--action">
          <span className="btn-txt">GET DEMO</span>

          <span className="btn-icon">
            <PhoneIcon />
          </span>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__icon">
          <ContactSvg />
        </div>
        <h2 className="sidebar__heading">Book Free Consultation</h2>

        <div className="sidebar__content">
          <div className="sidebar__content__form">
            <InputComponent
              placeholder="Name"
              inputClass="sidebar__content__form--inpt"
              value={name}
              required
              onChange={(e) => {setName(e.target.value)}}
            />
            <InputComponent
              placeholder="Email"
              type="email"
              required
              inputClass="sidebar__content__form--inpt"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <InputComponent
              placeholder="Mobile"
              inputClass="sidebar__content__form--inpt"
              value={phoneNum}
              onChange={(e) => {setMobile(e.target.value)}}
            />
            <InputComponent
              placeholder="Message"
              type="textarea"
              required
              inputClass="sidebar__content__form--msg"
              value={message}
              onChange={(e) => {setMessage(e.target.value)}}
            />
          </div>
          <div className="recaptcha">
            <ReCAPTCHA
              className="recap"
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={(value) => handleRecaptcha(value)}
            />
          </div>
          <div className="sidebar__content__btn">
            <Button
              className="form-cancel"
              btnIcon={<ClearIcon />}
              onClick={handleCancel}
            />
            <Button
              className="form-submit"
              btnIcon={<SubmitIcon />}
              onClick={handleSubmitContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
