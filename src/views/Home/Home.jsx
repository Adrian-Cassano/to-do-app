import React, { useEffect, useState}from "react";

import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";

import Modal from '../../components/Modal/Modal'
import styles from "./Home.module.css";



const Home = () => {
  const navigate = useNavigate ()
  const userSlice = useSelector((store) => store.userSlice);

// const modal = () => {       
//     const valorModal = document.getElementById("btn-modal").checked = true;
  
//    }

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(userSlice)
    // aca esta la logica del hook
    if(!userSlice.name){
      navigate ("/")
      alert("Por favor vuelva a ingresar su nombre")
    }
    return () => {
      //aca se limpia estados o listener
    }
  }, [userSlice])//entre los corchetes va con que variable se actualiza 
  

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div id={styles.MasterContainer}>
      <div id={styles.CardContainer}>
      <div id={styles.NabBar}>
        <div id={styles.ContainerName}>
          {userSlice.name?.length?(
           userSlice.name?.map((name, index)=>{
            return <div key={index + name} id="name">Hola {name}  !</div>
          })
          ) :(
            <span>No ingresaste ningun nombre</span>
          )
        }
          <div id={styles.SubTitle}>Aca podras manejar tus tareas!</div>
        </div>
        <div id={styles.ContainerButton}> 
            <button id={styles.ButtonTags} >Agregar tags</button>
            {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
            <button  onClick={()=>toggleModal()} id={styles.ButtonTask} >Agregar tarea</button>
        </div>
      </div>
      <div id={styles.ContainerTasks}>
            <div id={styles.Tasks}>TAREA</div>
      </div>
      </div>
    </div>
  );
};
export default Home;
