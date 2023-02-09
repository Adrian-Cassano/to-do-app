import React from "react";
import { useDispatch , useSelector} from "react-redux";

import {setName, setDescription, setCalenderStart, setCalenderEnd, setTag} from '../../redux/slices/modalSlice'

import CalenderStart from "../Calender/CalenderStart";
import CalenderEnd from "../Calender/CalenderEnd";


import styles from "./modal.module.css";

export default function Modal(props) {
  const modalSlice = useSelector((store) => store.modalSlice);
  const dispatch = useDispatch();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const titleLargo = e.target[0].value.length;
    const title = e.target[0].value;
    const descriptionLargo = e.target[1].value.length;
    const description = e.target[1].value;
    const CalenderStart = e.target[2].value;
    const CalenderEnd = e.target[3].value;
    const tag = e.target[4].value;
   if(title === ""){
    alert("Ingrese un titulo")
  }
   else if(description ===""){
     alert("Ingrese una descripcion")
   }
  else if(titleLargo >= 20){
    alert("Exediste los caracteres en el titulo")
  }
  else if(descriptionLargo >= 256){
    alert("Exediste los caracteres en el titulo")
  }
  else{
  dispatch(setName(title));
  dispatch(setDescription(description));
  dispatch(setCalenderStart(CalenderStart));
  dispatch(setCalenderEnd(CalenderEnd));
  dispatch(setTag(tag));

  }
  }

  return (
    <div id={styles.ModalContainer}>
      <div id={styles.Modal}>
        <div id={styles.Titulo}>Nueva Tarea</div>
        <button onClick={() => props.toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form onSubmit={handleSubmit}>
            <div>
              Titulo:<input type="text" placeholder="Titulo"></input>
              </div>
              <div>
              Descripcion: <input type="text" placeholder="Descripcion (Max 256)"></input>
              </div>
            <div id={styles.ContainerCalendar}>
              <div>Fecha de inicio:
              <CalenderStart />
              </div>
              <div>Fecha de finalizacion:
              <CalenderEnd />
              </div>
              <div>
                Tag:
                <select>
                  <input type=""></input>
                  <option>None</option>
                  <option>#Casa</option>
                  <option>#Trabajo</option>
                  <option>#Ocio</option>
                </select>
              </div>
              <div id={styles.ContainerButton}>
              <button type="submit" name="submit">Aceptar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
