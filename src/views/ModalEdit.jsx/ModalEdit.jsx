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

    const yearStart = moment(startDate).format("YYYY");
    const yearEnd = moment(endDate).format("YYYY");

    const monthStart = moment(startDate).format("MM");
    const monthEnd = moment(endDate).format("MM");

    const dayStart = moment(startDate).format("DD");
    const dayEnd = moment(endDate).format("DD");

    if (title === "") {
      toast.warn("Enter a title");
    } else if (description === "") {
      toast.warn("Enter a description");
    } else if (title.length > 20) {
      toast.warn("Maximum of 20 characters in the title");
    } else if (description.length > 256) {
      toast.warn("Maximum 256 characters in the description");
    } else if (startDate === null || endDate === null) {
      toast.warn("Enter a valid date");
    } else if (dateStart === dateEnd) {
      toast.warn("Your dates are equal");
    } else if (dateEnd === "") {
      toast.warn("Enter end date");
    } else if (yearEnd < yearStart) {
      toast.warn("Enter end date valid");
    } else if (
      (yearEnd < yearStart + 1) & (monthEnd < monthStart) ||
      dayEnd < dayStart
    ) {
      toast.warn("Enter end date valid");
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
        <div id={styles.Titulo}>Edit task</div>
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
              placeholder="Enter title"
              maxLength="20"
            />
            <div>Descripcion</div>
            <textarea
              id={styles.InputDescription}
              type="text"
              placeholder="Description (Max 256)"
              maxLength="256"
              defaultValue={description}
              setvalue={setDescription}
            />
            <div id={styles.ContainerCalendar}>
              <div>
                Start date
                <Calender
                  id={styles.CalenderStartDate}
                  value={startDate}
                  setValue={setStartDate}
                />
              </div>
              <div id={styles.InputTitle}>
                Completion date
                <Calender
                  value={endDate}
                  setValue={setEndDate}
                  firstDate={startDate}
                />
              </div>
              <div>
                Tag
                <div id={styles.Tag}>
                  <Tag value={tag} setvalue={setTag} />
                </div>
              </div>
              <button id={styles.ContainerButton} type="submit" name="submit">
                Accept
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalEdit;
