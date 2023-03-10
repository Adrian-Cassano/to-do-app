import React from "react";
import {  useDispatch } from "react-redux";

import {
  setClear,
  setMoveDown,
  setMoveUp,
} from "../../redux/slices/modalSlice";

import styles from "./CardTask.module.css";

const CardTask = ({
  title,
  index,
  id,
  description,
  startDate,
  endDate,
  isFirstCard,
  isLastCard,
  largoArray,
  tag
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div id={styles.MasterContainer}>
        <div id={styles.TextContainer}>
          <div id={styles.TitleContainer}>
            <div id="title">{title}</div>
            <button
              id={styles.ButtonContainer}
              onClick={() => dispatch(setClear(id))}
            >
              Eliminar Task
            </button>
            {largoArray > 1 && !isLastCard  && (
              <button
                id={styles.ButtonContainer}
                onClick={() => dispatch(setMoveDown(id))}
              >
                Mover abajo
              </button>
            )}
            {largoArray > 1 && !isFirstCard && (
              <button
                id={styles.ButtonContainer}
                onClick={() => dispatch(setMoveUp(id))}
              >
                Mover arriba
              </button>
            )}
          </div>
          <div id={styles.DescriptionContainer}>
            <div id="title">{description}</div>
          </div>
        </div>
        <div id={styles.DateContainer}>
          <div id="title">Fecha de inicio: {startDate}</div>
          <div id="title">Fecha de finalizacion: {endDate}</div>
          <div>{tag}</div>
        </div>
      </div>
    </div>
  );
};
export default CardTask;
