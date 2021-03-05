import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import "../../bootstrap.min.css";

function Update({history}) {
  const [email, setEmail] = useState("");
  const [old, setOld] = useState("");
  const [newPasswd, setNew] = useState("");
  const [confirm, setConfirm] = useState("");

  const updatePassword = (e) => {
    e.preventDefault();

    if (newPasswd === confirm) {
      axios
        .post(`${process.env.REACT_APP_USER}/updatePassword`, {
          email: email,
          oldPass: old,
          newPass: newPasswd
        })
        .then((res) => {
          if (res.data.done === 1) {
            alert("Password Updated Successfully");
          } else {
            alert("You have not provided the correct current password");
          }

          setTimeout(() => {
            history.push('/dashboard');
          }, 1500);
        })
        .catch((err) => {
          alert("Something Went Wrong");
        });
    } else {
      alert("The passwords don't match!");
    }
  };

  return (
    <>
      <div
        className="form1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>UPDATE PASSWORD</h1>
        <form noValidate onSubmit={updatePassword}>
          <div className="input-field" style={{ marginTop: "2rem" }}>
            {/* <input
              onChange={(e) => {
                setOld(e.target.value);
              }}
              value={old}
              id="old_passwd"
              type="text"
              required
            /> */}
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="old_passwd"
              type="email"
              required
              placeholder="Email"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
            />
            </div>
          <div className="input-field" style={{ marginTop: "2rem" }}>
            <Input
              onChange={(e) => {
                setOld(e.target.value);
              }}
              value={old}
              id="old_passwd"
              type="password"
              required
              placeholder="Old Password"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
            />
            {/* <label htmlFor="email">Old Password</label> */}
          </div>
          <div className="input-field" style={{ marginTop: "2rem" }}>
            {/* <input
              onChange={(e) => {
                setNew(e.target.value);
              }}
              value={newPasswd}
              id="new_passwd"
              type="password"
              required
            /> */}
            <Input
              onChange={(e) => {
                setNew(e.target.value);
              }}
              value={newPasswd}
              id="new_passwd"
              type="password"
              required
              placeholder="New Password"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
            />
            {/* <label htmlFor="password">New Password</label> */}
          </div>
          <div className="input-field" style={{ marginTop: "2rem" }}>
            {/* <input
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              value={confirm}
              id="new_passwd"
              type="password"
              required
            /> */}
            <Input
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              value={confirm}
              id="new_passwd"
              type="password"
              required
              placeholder="Confirm Password"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
            />
            {/* <label htmlFor="password">Confirm Password</label> */}
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Update Password
            </button> */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ margin: 20 }}
            >
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
