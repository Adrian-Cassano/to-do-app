import { createSlice } from "@reduxjs/toolkit";


//COMO INICIA Y ES EL ESTADO, QUE SE VA CAMBIANDO CON EL setFavorito
const initialState = {
  tareas: [],
  ultimoId: 0,
};

// EL SLICE EN SI, QUE IMPORTA EL INITIAL STATE
export const modalSlice = createSlice({
  name: "stateday",
  initialState,

  //Los reductores lo que hacen es modificar los valores del estado
  reducers: {
    setTareas: (state, action) => {
      const { title, description, dateStart, dateEnd } = action.payload;

      state.tareas = [
        ...state.tareas,
        {
          title: title,
          description: description,
          startDate: dateStart,
          endDate: dateEnd,
          id: state.ultimoId,
        },
      ];
      state.ultimoId++;
    },
    setClear: (state, action) => {
      const newArray = state.tareas.filter((tarea) => {
        return action.payload !== tarea.id;
      });
      state.tareas = newArray;
    },
    setMoveUp: (state, action) => {
      // const actual = action.payload
      // const idActual = action.payload.id
      const newArray = state.tareas.filter((tarea, index) => {
        

        return action.payload.id !== tarea.id 
        
      });
      state.tareas = newArray;
      
      state.tareas.splice(action.payload.id-1,0, action.payload)
      console.log(action.payload.id)
      
      
    },
    setMoveDown: (state, action) => {
      // const actual = action.payload
      // const idActual = action.payload.id
      console.log(action.payload)
      const newArray = state.tareas.forEach((tarea, index) => {
        
        
        
        return  state.tareas.splice(action.payload.id, 2  ,action.payload)
        
      });
      // state.tareas = newArray;
      
      // // console.log(action.payload.id)
     
    },
    
  },
});

export const { setTareas, setClear, setMoveDown,setMoveUp } = modalSlice.actions;

export const stateday = (state) => state;

export default modalSlice.reducer;
