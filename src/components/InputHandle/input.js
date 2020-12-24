import React, { useState } from "react";

function InputApp() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    droplist: "",
    isChecked: false,
    gender: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <h1>React form Handeling</h1>
      <form>
        <label>
          First Name :
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name :
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Message:{" "}
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <label>
          Pick your favorite car brand:{" "}
          <select
            name="droplist"
            value={state.droplist}
            onChange={handleChange}
          >
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
            <option value="maserati">Maserati</option>
            <option value="infinity">Infinity</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </form>
      <h5>
        Full Name : {state.fname} {state.lname}
      </h5>
      <p>Message : {state.message}</p>
      <p>Drop : {state.droplist}</p>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender Selected : {state.gender}</h5>
    </div>
  );
}

export default InputApp;
