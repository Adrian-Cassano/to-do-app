import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";


import { setName } from "../../redux/slices/userSlice";

import styles from "./Welcome.module.css";

const Welcome = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.userSlice);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const largo =  e.target[0].value.length
    const name = e.target[0].value;
    if (name === "" ) {
      alert("Completa tu nombre");
    }else if (largo < 4 ){
      alert("Minimo 4 letras")
    }
    else if (largo >= 18){
      alert ("Maximo 18")
    }
     else {
      dispatch(setName(name)); 
      navigate("/Home");
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
        <form id={styles.FormContainer}   onSubmit={handleSubmit}>
          <input  id={styles.InputName} type="text" name="nombre" placeholder="Ingresa tu nombre" />
          <button id={styles.ButtonIn}   type="submit" name="submit" >Ingresar</button>
        </form>
      </div>
    </div>
  );
};
export default Welcome;
