import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setClear,
  setMoveDown,
  setMoveUp,
} from "../../redux/slices/modalSlice";

import styles from "./CardTask.module.css";

const CardTask = () => {
  const modalSlice = useSelector((store) => store.modalSlice);
  const dispatch = useDispatch();

  var largoArray = modalSlice.tareas.length;

  console.log(largoArray);
  return (
    <div>
      {modalSlice?.tareas?.length ? (
        modalSlice?.tareas?.map((tarea, index) => {
          return (
            <div id={styles.MasterContainer} key={"tarea" + index}>
              <div id={styles.TextContainer}>
                <div id={styles.TitleContainer}>
                  <div id="title">{tarea.title}</div>
                  <button
                    id={styles.ButtonContainer}
                    onClick={() => dispatch(setClear(tarea.id))}
                  >
                    Eliminar Task
                  </button>
                  {largoArray !== 1 && index + 1 !== largoArray && (
                    <button
                      id={styles.ButtonContainer}
                      onClick={() => dispatch(setMoveDown(tarea))}
                    >
                      Mover abajo
                    </button>
                  )}
                  {index !== 0 && (
                    <button
                      id={styles.ButtonContainer}
                      onClick={() => dispatch(setMoveUp(tarea))}
                    >
                      Mover arriba
                    </button>
                  )}
                </div>
                <div id={styles.DescriptionContainer}>
                  <div id="title">{tarea.description}</div>
                </div>
              </div>
              <div id={styles.DateContainer}>
                <div id="title">Fecha de inicio: {tarea.startDate}</div>
                <div id="title">Fecha de finalizacion: {tarea.endDate}</div>
              </div>
            </div>
          );
        })
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default CardTask;
