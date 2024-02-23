import React from "react";
import { useState } from "react";
import axios from "axios";

const Input = ({ refresh, setRefresh }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function postToDB() {
    const data = { name, description };
    console.log("Data:", data);
    axios
      .post(`${import.meta.env.VITE_URL}/additem`, data)
      .then(() => {
        console.log("Added");
        setRefresh(refresh+1);
        setName("");
        setDescription("");
      })
      .catch((e) => {
        console.log("Error : ", e);
      });
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={postToDB}>Add</button>
      <button
        onClick={(refresh) => {
          setRefresh(refresh + 1);
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Input;
