import "./App.css";
import React, { useState, useEffect } from "react";
import { key, host } from "./weather app/config";
import Form from "./weather app/Form";

function App() {
  const [data, setData] = useState(null);
  const [textInput, setTextInput] = useState("");
  //run the useEffect function only when the user hits the button. Set its initial value to the initial value of the input field
  const [idFromBtn, setIdFromBtn] = useState(textInput);

  useEffect(() => {
    console.log("fetching data");
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${idFromBtn}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": key,
        "x-rapidapi-host": host,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
        console.log("abt to log data");
      });
  }, [idFromBtn]);

  if (data === null) {
    console.log("no data returned..");
    return (
      <div className="App">
        <header className="App-header">
          <h2>LOADING...</h2>
        </header>
      </div>
    );
  } else {
    if (data.error) {
      if (data.error.code === 1003) {
        return (
          <div className="App">
            <header className="App-header">
              <Form
                setTextInput={setTextInput}
                textInput={textInput}
                setIdFromBtn={setIdFromBtn}
                idFromBtn={idFromBtn}
              />
              <h2>Enter a City Name of your choice</h2>
              <h3>Your Info Will be Displayed Here</h3>
            </header>
          </div>
        );
      } else if (data.error.code === 1006) {
        return (
          <div className="App">
            <header className="App-header">
              <Form
                setTextInput={setTextInput}
                textInput={textInput}
                setIdFromBtn={setIdFromBtn}
                idFromBtn={idFromBtn}
              />
              <h3>{data.error.message}</h3>
            </header>
          </div>
        );
      }
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Form
              setTextInput={setTextInput}
              textInput={textInput}
              setIdFromBtn={setIdFromBtn}
              idFromBtn={idFromBtn}
            />
            <div>
              <h2>City: {data.location.name}</h2>
              <h2>Country: {data.location.country}</h2>
              <h2>Condition: {data.current.condition.text}</h2>
              <img src={data.current.condition.icon} alt="" />
              <h2>Local-Time: {data.location.localtime}</h2>
            </div>
          </header>
        </div>
      );
    }
  }
}

export default App;
