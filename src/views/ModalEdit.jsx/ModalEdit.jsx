import React from "react";
import { useDispatch } from "react-redux";

import { setTareas, setClear } from "../../redux/slices/modalSlice";

import { toast, ToastContainer } from "react-toastify";

import Calender from "../../components/Calender/Calender";
import Tag from "../../components/Tag/Tag";

import "react-toastify/dist/ReactToastify.css";
import styles from "../Modal/modal.module.css";
import moment from "moment";

const ModalEdit = ({
  tagEdit,
  startDateEdit,
  endDateEdit,
  titulo,
  descripcion,
  id,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = React.useState(new Date(startDateEdit));
  const [endDate, setEndDate] = React.useState(new Date(endDateEdit));
  const [tag, setTag] = React.useState(tagEdit);
  const [title, setTitle] = React.useState(titulo);
  const [description, setDescription] = React.useState(descripcion);

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
    } else if (title.length >= 20) {
      toast.warn("El maximo es de 20 carácteres en el titulo");
    } else if (description.length >= 256) {
      toast.warn("El maximo es de 256 carácteres en la descripcion");
    } else if (startDate === null || endDate === null) {
      toast.warn("Ingrese una fecha de valida");
    } else if (dateStart === dateEnd) {
      toast.warn("Tus fechas son iguales");
    } else {
      dispatch(setTareas({ title, description, dateStart, dateEnd, tag }));
      toggleModal();
      dispatch(setClear(id));
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
        <button onClick={() => toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit} id={styles.Form} method="post">
            <div>Titulo</div>
            <input
              id={styles.InputTitle}
              defaultValue={title}
              setvalue={setTitle}
              placeholder="Ingresar titulo"
              maxlength="20"
            />
            <div>Descripcion</div>
            <input
              id={styles.InputDescription}
              type="text"
              placeholder="Descripcion (Max 256)"
              maxlength="256"
              defaultValue={description}
              setvalue={setDescription}
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
};
export default ModalEdit;
