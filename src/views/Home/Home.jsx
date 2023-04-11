import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTag } from "../../redux/slices/tagSlice";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import Modal from "../Modal/Modal";
import CardTask from "../../components/CardTask/CardTask";
import ModalTags from "../ModalTags/ModalTags";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  
  const modalSlice = useSelector((store) => store.modalSlice);
  const userSlice = useSelector((store) => store.userSlice);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTagsOpen, setModalTagsOpen] = useState(false);

  

  useEffect(() => {
    if (!userSlice.name) {
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
            {userSlice.name ? (
              <div id={styles.Name}>Hola {userSlice.name} !</div>
            ) : (
              <span>No ingresaste ningun nombre</span>
            )}
            <div id={styles.SubTitle}>Aca podras manejar tus tareas!</div>
          </div>
          <div id={styles.ContainerButton}>
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
