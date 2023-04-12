import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import store from "../../redux/store/store";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

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

  const deleteAll = () => {
    persistor.purge();
    navigate("/Home").reload();
  };

  const modalSlice = useSelector(stateModal);
  const userSlice = useSelector(stateName);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTagsOpen, setModalTagsOpen] = useState(false);

  useEffect(() => {
    if (!userSlice) {
      navigate("/");
      toast.warn("Por favor vuelva a ingresar su nombre");
    }
    return () => {};
  }, [userSlice]);

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
        theme="dark"
      />
      {modalOpen && <Modal toggleModal={() => setModalOpen(!modalOpen)} />}
      {modalTagsOpen && (
        <ModalTags toggleModal={() => setModalTagsOpen(!modalTagsOpen)} />
      )}
      <div id={styles.CardContainer}>
        <div id={styles.NabBar}>
          <div id={styles.ContainerName}>
            {userSlice ? (
              <div id={styles.Name}>Hola {userSlice} !</div>
            ) : (
              <span>No ingresaste ningun nombre</span>
            )}
            <div id={styles.SubTitle}>Aca podras manejar tus tareas!</div>
          </div>
          <div id={styles.ContainerButton}>
            <form onSubmit={deleteAll}>
              <button type="submit">Eliminar todo</button>
            </form>
            <button
              id={styles.ButtonTags}
              onClick={() => setModalTagsOpen(!modalTagsOpen)}
            >
              Agregar tags
            </button>

            <button
              onClick={() => setModalOpen(!modalOpen)}
              id={styles.ButtonTags}
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
