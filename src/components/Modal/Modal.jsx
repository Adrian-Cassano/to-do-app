import React from "react";
import { useSelector } from "react-redux";
import Calender from "../Calender";

import styles from "./modal.module.css";

export default function Modal(props) {
  const calendarSlice = useSelector((store) => store.calendarSlice);

  return (
    <div id={styles.ModalContainer}>
      <div id={styles.Modal}>
        <header>Nueva Tarea</header>
        <button onClick={()=>props.toggleModal()} id={styles.ButtonModal}>
          x
        </button>
        <div id={styles.FormContainer}>
          <form>
            <div>
              Titulo:<input placeholder="Titulo"></input>
            </div>
            <div>
              Descripcion: <input placeholder="Descripcion (Max 256)"></input>
            </div>
            <div id={styles.ContainerCalendar}>
            <Calender/>
            </div>
            <div>Fecha de finalizacion:</div>
            <div>
              Tag:<select></select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// {
//   /* <div id={styles.Calendar}>
//                 <div id={styles.NavBar}>
//                   <button>~</button>
//                   <div>Mes</div>
//                   <button>ç</button>
//                 </div>
//                 <div id={styles.Days}>
//                   <div className={styles.Day}>Dom</div>
//                   <div className={styles.Day}>Lun</div>
//                   <div className={styles.Day}>Mar</div>
//                   <div className={styles.Day}>Mie</div>
//                   <div className={styles.Day}>Jue</div>
//                   <div className={styles.Day}>Vie</div>
//                   <div className={styles.Day}>Sab</div>
//                 </div>
//                 <div id={styles.NumContainer}>
//                 {calendarSlice.name?.length?(
//                  calendarSlice.name?.map((name, index)=>{
//                 return <div key={index + name} id="name"> {name}  </div>
//           })
//           ) :(
//             <span>No ingresaste ningun nombre</span>
//           )
//         }
                  
//                 </div>
//               </div> */
// }
