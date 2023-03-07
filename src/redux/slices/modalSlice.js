import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tareas: [],
  ultimoId: 0,
};


export const modalSlice = createSlice({
  name: "statemodal",
  initialState,


  reducers: {
    setTareas: (state, action) => {
      const { title, description, dateStart, dateEnd, tag} = action.payload;

      state.tareas = [
        ...state.tareas,
        {
          title: title,
          description: description,
          startDate: dateStart,
          endDate: dateEnd,
          tag : tag,
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
      const tareaActual = state.tareas.find((tarea) => {
        return tarea.id === action.payload;
      });
      const indiceTareaActual = state.tareas.findIndex((tarea) => {
        return tarea.id === action.payload;
      });
      anteriorTarea = { ...state.tareas[indiceTareaActual + 1] };

      state.tareas.splice(indiceTareaActual, 2, anteriorTarea, tareaActual);
    },
    setMoveUp: (state, action) => {
      var anteriorTarea;
      const tareaActual = state.tareas.find((tarea) => {
        return tarea.id === action.payload;
      });
      const indiceTareaActual = state.tareas.findIndex((tarea) => {
        return tarea.id === action.payload;
      });
      anteriorTarea = { ...state.tareas[indiceTareaActual - 1] };

      state.tareas.splice(
        indiceTareaActual - 1,
        2,
        tareaActual,
        anteriorTarea
      );
    },
  },
});

export const { setTareas, setClear, setMoveDown, setMoveUp } =
  modalSlice.actions;

export const statemodal = (state) => state;

export default modalSlice.reducer;
