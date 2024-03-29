import React, { useState } from "react";
import { useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import store from "../../redux/store/store";

import { useNavigate } from "react-router-dom";

import { stateModal } from "../../redux/slices/modalSlice";
import { stateName } from "../../redux/slices/userSlice";

import Modal from "../Modal/Modal";
import CardTask from "../../components/CardTask/CardTask";
import ModalTags from "../ModalTags/ModalTags";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const persistor = persistStore(store);

  const modalSlice = useSelector(stateModal);
  const userSlice = useSelector(stateName);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTagsOpen, setModalTagsOpen] = useState(false);

  const deleteAll = () => {
    persistor.purge();
     navigate("/");
    window.location.assign("/")
  };

 

  
  return (
    <div id={styles.MasterContainer}>
      
      {modalOpen && <Modal toggleModal={() => setModalOpen(!modalOpen)} />}
      {modalTagsOpen && (
        <ModalTags toggleModal={() => setModalTagsOpen(!modalTagsOpen)} />
      )}
      <div id={styles.CardContainer}>
        <div id={styles.NabBar}>
          <div id={styles.ContainerName}>
            {userSlice ? (
              <div id={styles.Name}>Hi {userSlice} !</div>
            ) : (
              <span>You did not enter any name</span>
            )}
            <div id={styles.SubTitle}>Here you can manage your tasks!</div>
          </div>
          <div id={styles.ContainerButton}>
            <form onSubmit={deleteAll}>
              <button id={styles.ButtonDeletAll} type="submit">
                Delet profile
              </button>
            </form>
            <button
              id={styles.ButtonTags}
              onClick={() => setModalTagsOpen(!modalTagsOpen)}
            >
              Add tags
            </button>

            <button
              onClick={() => setModalOpen(!modalOpen)}
              id={styles.ButtonTags}
            >
              Add task
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
