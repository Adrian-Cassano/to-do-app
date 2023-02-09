import { createSlice } from "@reduxjs/toolkit";

//COMO INICIA Y ES EL ESTADO, QUE SE VA CAMBIANDO CON EL setFavorito
const initialState = {
  name: null,
  description: null,
  calenderStart: null,
  calenderEnd: null,
  tag: null,
};

// EL SLICE EN SI, QUE IMPORTA EL INITIAL STATE
export const modalSlice = createSlice({
  name: "stateday",
  initialState,

  //Los reductores lo que hacen es modificar los valores del estado
  reducers: {
    setName: (state, action) => {
      state.name =  [action.payload];
    },
    setDescription: (state, action) => {
      state.description =  [action.payload];
    },
    setCalenderStart: (state, action) => {
      state.calenderStart =  [action.payload];
    },
    setCalenderEnd: (state, action) => {
      state.calenderEnd =  [action.payload];
    },
    setTag: (state, action) => {
      state.tag =  [action.payload];
    },

    
  },
});

export const { setName, setDescription, setCalenderStart, setCalenderEnd, setTag} = modalSlice.actions;


export const stateday = (state) => state;

export default modalSlice.reducer;
