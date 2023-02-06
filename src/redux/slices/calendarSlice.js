import { createSlice } from "@reduxjs/toolkit";

//COMO INICIA Y ES EL ESTADO, QUE SE VA CAMBIANDO CON EL setFavorito
const initialState = {
  name: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
};

// EL SLICE EN SI, QUE IMPORTA EL INITIAL STATE
export const userSlice = createSlice({
  name: "stateday",
  initialState,

  //Los reductores lo que hacen es modificar los valores del estado
  reducers: {
    setday: (state, action) => {
      state.day =  [action.payload];
    },

    clearday: (state) => {
      state.day = [];
    },
    
  },
});

export const { setday, clearday } = userSlice.actions;


export const stateday = (state) => state;

export default userSlice.reducer;
