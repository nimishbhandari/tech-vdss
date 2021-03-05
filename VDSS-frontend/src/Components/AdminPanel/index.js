import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../bootstrap.min.css";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import { removeLocalStorage } from "../../helpers/auth.helpers";

function AdminPanel({ history }) {
  const [contact, setContact] = useState([]);
  const [update, setUpdate] = useState(false);
  const data = [];

  const signout = () => {
    removeLocalStorage("login");
    history.push("/home");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CONTACT}/getContact`)
      .then((res) => {
        res.data.contact.forEach((contact) => {
          data.push({
            name: contact.name,
            email: contact.email,
            mobile: contact.mobile,
            message: contact.message,
          });
        });
        setContact(data);
      })
      .catch((err) => {
        alert("Fetching The Contacts Failed");
      });
  }, [update]);

  return (
    <>
      <Button
        onClick={signout}
        variant="contained"
        color="secondary"
        style={{ margin: 20 }}
      >
        Logout
      </Button>
      <Button variant="contained" color="primary" style={{ margin: 20 }}>
        Update Password
      </Button>
      <h1 style={{ textAlign: "center" }}>VDSS Admin </h1>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "E-mail", field: "email" },
          { title: "Mobile", field: "mobile" },
          { title: "Message", field: "message" },
        ]}
        data={contact}
        title="VDSS Admin DashBoard"
        style={{ padding: 40 }}
      />

      {/* <button onClick={signout}>Logout</button> */}
    </>
  );
}

export default AdminPanel;
