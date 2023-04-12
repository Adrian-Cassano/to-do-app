import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  setClear,
  setMoveDown,
  setMoveUp,
} from "../../redux/slices/modalSlice";
import ModalEdit from "../../views/ModalEdit.jsx/ModalEdit";

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
  tag,
}) => {
  const dispatch = useDispatch();

  const [modalEditOpen, setModalEditOpen] = useState(false);
  var today = new Date();
  const hoy = moment(today).format("MM/DD/YYYY");

  return (
    <div>
      <div id={styles.MasterContainer}>
        {modalEditOpen && (
          <ModalEdit
            key={`cardtask-${index}`}
            index={index}
            titulo={title}
            id={id}
            descripcion={description}
            startDateEdit={startDate}
            endDateEdit={endDate}
            tagEdit={tag}
            toggleModal={() => setModalEditOpen(!modalEditOpen)}
          />
        )}
        <div id={styles.TextContainer}>
          <div id={styles.TitleContainer}>
            <div>{title}</div>
            <div id={styles.NavBarButton}>
              <button
                id={styles.ButtonTask}
                onClick={() => dispatch(setClear(id))}
              >
                Eliminar
              </button>
              <button
                onClick={() => setModalEditOpen(!modalEditOpen)}
                id={styles.ButtonTask}
              >
                Editar
              </button>
            </div>
          </div>
          <div id={styles.DescriptionContainer}>
            <div>{description} </div>
          </div>
        </div>
        <div id={styles.InfoContainer}>
          <div id={styles.DateContainer}>
            <div>Fecha inicial: {startDate}</div>
            {endDate < hoy && (
              <div id={styles.FechaAtrasada}>Fecha limite: {endDate}</div>
            )}
            {endDate >= hoy && <div>Fecha limite:{endDate}</div>}
            <div>Tag: {tag}</div>
          </div>
          <div id={styles.ButtonMoveCardContainer}>
            {largoArray > 1 && !isLastCard && (
              <button
                id={styles.ButtonMove}
                onClick={() => dispatch(setMoveDown(id))}
              >
                ↓
              </button>
            )}
            {largoArray > 1 && !isFirstCard && (
              <button
                id={styles.ButtonMove}
                onClick={() => dispatch(setMoveUp(id))}
              >
                ↑
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardTask;
