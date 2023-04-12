import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTareas } from "../../redux/slices/modalSlice";
import { stateTag } from "../../redux/slices/tagSlice";

import { toast, ToastContainer } from "react-toastify";

import moment from "moment";

import Calender from "../../components/Calender/Calender";
import Tag from "../../components/Tag/Tag";

import "react-toastify/dist/ReactToastify.css";
import styles from "./modal.module.css";

export default function Modal(props) {
  const dispatch = useDispatch();

  const tagSlice = useSelector(stateTag);

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState();
  const [tag, setTag] = React.useState(tagSlice.tags[0].tag);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateStart = moment(startDate).format("MM/DD/YYYY");
    const dateEnd = moment(endDate).format("MM/DD/YYYY");
    const title = e.target[0].value;
    const description = e.target[1].value;

    if (title === "") {
      toast.warn("Ingrese un titulo");
    } else if (description === "") {
      toast.warn("Ingrese una descripcion");
    } else if (title.length > 20) {
      toast.warn("El maximo es de 20 carácteres en el titulo");
    } else if (description.length > 256) {
      toast.warn("El maximo es de 256 carácteres en la descripcion");
    } else if (startDate === null || endDate === null) {
      toast.warn("Ingrese una fecha de valida");
    } else if (dateStart === dateEnd) {
      toast.warn("Tus fechas son iguales");
    } else {
      dispatch(setTareas({ title, description, dateStart, dateEnd, tag }));

      props.toggleModal();
    }
  };

  return (
    <div id={styles.ModalContainer}>
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
      <div id={styles.Modal}>
        <div id={styles.Titulo}>Nueva Tarea</div>
        <button onClick={() => props.toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit} id={styles.Form} method="post">
            <div>Titulo</div>
            <input
              id={styles.InputTitle}
              placeholder="Ingresar titulo"
              maxLength="20"
            />
            <div>Descripcion</div>
            <textarea
              id={styles.InputDescription}
              type="text"
              placeholder="Descripcion (Max 256)"
              maxLength="256"
            />
            <div id={styles.ContainerCalendar}>
              <div>
                Fecha de inicio
                <Calender
                  id={styles.CalenderStartDate}
                  value={startDate}
                  setValue={setStartDate}
                />
              </div>
              <div id={styles.InputTitle}>
                Fecha de finalizacion
                <Calender
                  value={endDate}
                  setValue={setEndDate}
                  firstDate={startDate}
                />
              </div>
              <div>
                Tag
                <div id={styles.Tag}>
                  <Tag value={tag} setValue={setTag} />
                </div>
              </div>
              <button id={styles.ContainerButton} type="submit" name="submit">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
