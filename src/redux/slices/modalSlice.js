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
    setMoveDown: (state, action) => {
      var anteriorTarea;
      const indiceTareaActual = state.tareas.findIndex((tarea) => {
        return tarea.id === action.payload.id;
      });
      anteriorTarea = { ...state.tareas[indiceTareaActual + 1] };

      state.tareas.splice(indiceTareaActual, 2, anteriorTarea, action.payload);
    },
    setMoveUp: (state, action) => {
      var anteriorTarea;
      const indiceTareaActual = state.tareas.findIndex((tarea) => {
        return tarea.id === action.payload.id;
      });
      anteriorTarea = { ...state.tareas[indiceTareaActual - 1] };

      state.tareas.splice(
        indiceTareaActual - 1,
        2,
        action.payload,
        anteriorTarea
      );
    },
  },
});

export const { setTareas, setClear, setMoveDown, setMoveUp } =
  modalSlice.actions;

export const stateday = (state) => state;

export default modalSlice.reducer;
