import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

import "../../bootstrap.min.css";
import { setLocalStorage } from "../../helpers/auth.helpers";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_USER}/loginAuth`, {
        email: email,
        password: passwd,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.passwordincorrect === "Login") {
          setLocalStorage("login", true);
          history.push("/dashboard");
        } else {
          alert("Something Went Wrong");
        }
      })
      .catch((err) => {
        alert("Something Went Wrong!");
      });
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
        <h1>
          VDSS <b>ADMIN </b>{" "}
        </h1>
        <form noValidate onSubmit={submitLogin}>
          <div className="input-field" style={{ marginTop: "2rem" }}>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="email"
              type="email"
              placeholder="Email"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
              required
            />
          </div>

          <div className="input-field" style={{ marginTop: "2rem" }}>
            <Input
              onChange={(e) => {
                setPasswd(e.target.value);
              }}
              value={passwd}
              id="password"
              type="password"
              placeholder="Password"
              inputProps={{ "aria-label": "description" }}
              style={{ width: "40vw" }}
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ margin: 20 }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
