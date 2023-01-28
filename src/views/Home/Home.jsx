import React from "react";
import { useDispatch, useSelector } from "react-redux";


import styles from "./Home.module.css";



const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.userSlice);


  return (
    <div id={styles.MasterContainer}>
      <div id={styles.NabBar}>
        <div id={styles.ContainerName}>
          <div id={styles.Name}>Adrian</div>
          <div id={styles.SubTitle}>Aca podras manejar tus tareas!</div>
        </div>
        <div id={styles.ContainerButton}>
            <button id={styles.NewTag}>Agregar tags</button>
            <button id={styles.NewTask}>Agregar tarea</button>
        </div>
      </div>
      <div id={styles.ContainerTasks}>
            <div id={styles.Tasks}></div>
      </div>
    </div>
  );
};
export default Home;
