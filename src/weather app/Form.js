import React from "react";

const Form = ({
  //import all the necessary props passed down from app.js
  textInput,
  setTextInput,
  setIdFromBtn,
}) => {
  //a function that gets called on the click of the button
  function searchForCity(e) {
    e.preventDefault();
    setIdFromBtn(textInput);
    setTextInput("");
  }

  //function gets called everytime a user types into the input field
  function handleChange(e) {
    // console.log(e.target.value);
    setTextInput(e.target.value);
  }
  return (
    <form>
      <input type="text" value={textInput} onChange={handleChange} />
      <button onClick={searchForCity}>Search</button>
    </form>
  );
};

export default Form;
