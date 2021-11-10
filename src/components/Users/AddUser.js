import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUsernameHandler = (e) => {
    setEnteredUser(e.target.value);
  };

  const addAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid details",
        message: "Please enter valid name and age (non-empty)",
      });
      return;
    }
    if (enteredAge < 0)
      setError({ title: "Invalid Age", message: "Please enter age >1" });

    if (enteredAge > 1) {
      props.onAddUser(enteredUser, +enteredAge);
    }
  };

  const handleClick = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal error={error} onConfirm={handleClick} />}
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
    </div>
  );
};

export default AddUser;
