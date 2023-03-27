import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Modal from "../Modal/Modal";
import CardTask from "../../components/CardTask/CardTask";
import ModalEdit from "../ModalEdit.jsx/ModalEdit";

import { setTag } from "../../redux/slices/tagSlice";

import styles from "./Home.module.css";

const Home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalSlice = useSelector((store) => store.modalSlice);
  const userSlice = useSelector((store) => store.userSlice);

  const [modalOpen, setModalOpen] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const tag = e.target[0].value;
    if (tag === "") {
      alert("Ingresa un tag");
    } else if (tag <= 1) {
      alert("Minimo 2 letras");
    } else {
      dispatch(setTag({ tag }));
    }
  };

  // useEffect(() => {
  //   // aca esta la logica del hook
  //   if(!userSlice.name){
  //     navigate ("/")
  //     alert("Por favor vuelva a ingresar su nombre")
  //   }
  //   return () => {
  //     //aca se limpia estados o listener
  //   }
  // }, [userSlice])//entre los corchetes va con que variable se actualiza

  return (
    <div id={styles.MasterContainer}>
      {modalOpen && <Modal toggleModal={() => setModalOpen(!modalOpen)} />}
      <div id={styles.CardContainer}>
        <div id={styles.NabBar}>
          <div id={styles.ContainerName}>
            {userSlice.name ? (
              <div id="name">Hola {userSlice.name} !</div>
            ) : (
              <span>No ingresaste ningun nombre</span>
            )}
            <div id={styles.SubTitle}>Aca podras manejar tus tareas!</div>
          </div>
          <div id={styles.ContainerButton}>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Escibir Tag nuevo" />
              <button id={styles.ButtonTags} type="submit">
                Agregar tags
              </button>
            </form>
            <button
              onClick={() => setModalOpen(!modalOpen)}
              id={styles.ButtonTask}
            >
              Agregar tarea
            </button>
          </div>
        </div>
        <div id={styles.ContainerTasks}>
          <div id={styles.Tasks}>
            {modalSlice?.tareas?.map((tarea, index) => {
              return (
                <CardTask
                  key={`cardtask-${index}`}
                  title={tarea.title}
                  id={tarea.id}
                  description={tarea.description}
                  startDate={tarea.startDate}
                  endDate={tarea.endDate}
                  isFirstCard={index === 0}
                  isLastCard={modalSlice.tareas.length - 1 === index}
                  largoArray={modalSlice.tareas.length}
                  tag={tarea.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
