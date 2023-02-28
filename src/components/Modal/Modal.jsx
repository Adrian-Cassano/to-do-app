import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { setTareas } from "../../redux/slices/modalSlice";

import Calender from "../Calender/Calender";

import styles from "./modal.module.css";
import moment from "moment";

export default function Modal(props) {
  const modalSlice = useSelector((store) => store.modalSlice);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateStart = moment(startDate).format("MM/DD/YYYY");
    const dateEnd = moment(endDate).format("MM/DD/YYYY");
    const title = e.target[0].value;
    const description = e.target[1].value;
    const tag = e.target[4].value;
    if (title === "") {
      alert("Ingrese un titulo");
    } else if (description === "") {
      alert("Ingrese una descripcion");
    } else if (title.length >= 20) {
      alert("Exediste los caracteres en el titulo");
    } else if (description.length >= 256) {
      alert("Exediste los caracteres en el titulo");
    } else {
      dispatch(setTareas({ title, description, dateStart, dateEnd }));

      props.toggleModal();
    }
  };

  return (
    <div id={styles.ModalContainer}>
      <div id={styles.Modal}>
        <div id={styles.Titulo}>Nueva Tarea</div>
        <button onClick={() => props.toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit} method="post">
            <div>
              Titulo:<input type="text" placeholder="Titulo"></input>
            </div>
            <div>
              Descripcion:{" "}
              <input type="text" placeholder="Descripcion (Max 256)"></input>
            </div>
            <div id={styles.ContainerCalendar}>
              <div>
                Fecha de inicio:
                <Calender value={startDate} setValue={setStartDate} />
              </div>
              <div>
                Fecha de finalizacion:
                <Calender value={endDate} setValue={setEndDate} />
              </div>
              <div>
                Tag:
                <select>
                  <option>None</option>
                  <option>#Casa</option>
                  <option>#Trabajo</option>
                  <option>#Ocio</option>
                </select>
              </div>
              <div id={styles.ContainerButton}>
                <button type="submit" name="submit">
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
