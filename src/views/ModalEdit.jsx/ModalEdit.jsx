import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTareas, setClear } from "../../redux/slices/modalSlice";

import Calender from "../../components/Calender/Calender";
import Tag from "../../components/Tag/Tag";

import styles from "./ModalEdit.module.css";
import moment from "moment";

const ModalEdit = ({
  tagEdit,
  startDateEdit,
  endDateEdit,
  index,
  titulo,
  descripcion,
  id,
  toggleModal,
}) => {
  const dispatch = useDispatch();

  console.log(titulo);

  const modalSlice = useSelector((store) => store.modalSlice);
  const tagSlice = useSelector((store) => store.tagSlice);

  const [startDate, setStartDate] = React.useState(new Date(startDateEdit));
  const [endDate, setEndDate] = React.useState(new Date(endDateEdit));
  const [tag, setTag] = React.useState(tagEdit);
  const [title, setTitle] = React.useState(titulo);
  const [description, setDescription] = React.useState(descripcion);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    const dateStart = moment(startDate).format("MM/DD/YYYY");
    const dateEnd = moment(endDate).format("MM/DD/YYYY");
    const title = e.target[0].value;
    const description = e.target[1].value;

    if (title === "") {
      alert("Ingrese un titulo");
    } else if (description === "") {
      alert("Ingrese una descripcion");
    } else if (title.length >= 20) {
      alert("Exediste los caracteres en el titulo");
    } else if (description.length >= 256) {
      alert("Exediste los caracteres en el titulo");
    } else {
      dispatch(setTareas({ title, description, dateStart, dateEnd, tag }));
      toggleModal();
      dispatch(setClear(id))
    }
  };

  return (
    <div id={styles.ModalContainer}>
      <div id={styles.Modal}>
        <div id={styles.Titulo}>Nueva Tarea</div>
        <button onClick={() => toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit} method="post">
            <div>
              Titulo:
              <input
                type="text"
                placeholder="Titulo"
                defaultValue={title}
                setvalue={setTitle}
              ></input>
            </div>
            <div>
              Descripcion:{" "}
              <input
                type="text"
                placeholder="Descripcion (Max 256)"
                defaultValue={description}
                setvalue={setDescription}
              ></input>
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
                Agregar tag:
                <div id={styles.Tag}>
                  <Tag value={tag} setValue={setTag} />
                </div>
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
};
export default ModalEdit;
