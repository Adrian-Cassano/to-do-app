import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setName } from "../../redux/slices/userSlice";

import styles from "./Welcome.module.css";

const Welcome = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.userSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name === "") {
      alert("Completa tu nombre");
    } else {
      dispatch(setName(name));
    }
  };
  return (
    <div id={styles.MasterContainer}>
      <h1>TO-DO-APP</h1>
      <div id={styles.LogInContainer}>
        <div id={styles.Text}>
          ¡Bienvenido a TO-DO-APP! En esta aplicacion vas apoder manejar tus
          tareas diarias!
        </div>
        <div id={styles.TextoName}>Ingresa tu nombre</div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="ingresar" />
          <input type="submit" name="submit" />
        </form>

        <button id={styles.ButtonIn}>Ingresar</button>
      </div>
    </div>
  );
};
export default Welcome;
