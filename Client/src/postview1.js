//Run this command in terminal in root folder before starting app -:"npx json-server --watch Mock-data/data.json --port 3004"

import React from "react";
import Postviewdata from "./postview";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./header";
import "./App.css";

function Postview() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);
  console.log(data);

  return (
    <div className='App'>
      <Header />
      {data ? (
        <div>
          {data.map((user) => (
            <Postviewdata user={user} />
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Postview;
