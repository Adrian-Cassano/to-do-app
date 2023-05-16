import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import { setName } from "../../redux/slices/userSlice";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const largo = e.target[0].value.length;
    const name = e.target[0].value;
    if (name === "") {
      toast.warn("Complete your name");
    } else if (largo < 4) {
      toast.warn("Min 4 characters");
    } else if (largo >= 18) {
      toast.warn("Max 18 characters");
    } else {
      dispatch(setName(name));
      navigate("/Home");
    }
  };

  return (
    <div id={styles.MasterContainer}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <h1 id={styles.Title}>TO-DO-APP</h1>
      <div id={styles.LogInContainer}>
        <div id={styles.Text}>
        Welcome to TO-DO-APP! In this application you will be able to manage your
          daily tasks!
        </div>
        <div id={styles.TextoName}>Enter your name</div>
        <form id={styles.FormContainer} onSubmit={handleSubmit}>
          <input
            id={styles.InputName}
            maxLength="17"
            type="text"
            name="nombre"
          />
          <div id={styles.ConditionText}>
          The user must be between 4 and 18 characters
          </div>
          <button id={styles.ButtonIn} type="submit" name="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Welcome;
