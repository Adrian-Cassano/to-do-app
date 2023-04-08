import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTag } from "../../redux/slices/tagSlice";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import Modal from "../Modal/Modal";
import CardTask from "../../components/CardTask/CardTask";

import "react-toastify/dist/ReactToastify.css";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalSlice = useSelector((store) => store.modalSlice);
  const userSlice = useSelector((store) => store.userSlice);

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tag = e.target[0].value;
    if (tag === "") {
      toast.warn("Ingresa un tag");
    } else if (tag <= 1) {
      toast.warn("Maximo 12 carácteres");
    } else {
      dispatch(setTag({ tag }));
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                id={styles.InputTag}
                type="text"
                placeholder="Escibir Tag nuevo"
              />
              <button id={styles.ButtonTags} type="submit">
                Agregar tags
              </button>
            </form>
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
