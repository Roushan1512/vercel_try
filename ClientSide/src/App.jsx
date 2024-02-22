import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";

const App = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/getallitems`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((e) => {
        console.log("Axios error : ", e);
      });
  }, [refresh]);

  return (
    <div>
      <div>
        {items.map((i) => (
          <li key={i.name}>
            {i.name} : {i.description}
          </li>
        ))}
        <Input refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
};

export default App;
