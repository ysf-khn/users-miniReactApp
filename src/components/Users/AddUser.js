import { useState } from "react";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUsernameHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const addAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    props.onAddUser(enteredUser, +enteredAge);
  };

  return (
    <div className={classes.card}>
      <form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          value={enteredUser}
          onChange={addUsernameHandler}
        ></input>
        <label>Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={addAgeHandler}
        ></input>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default AddUser;
