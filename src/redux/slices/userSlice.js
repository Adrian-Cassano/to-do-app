import { createSlice } from "@reduxjs/toolkit";

//COMO INICIA Y ES EL ESTADO, QUE SE VA CAMBIANDO CON EL setFavorito
const initialState = {
  name: null,
};

// EL SLICE EN SI, QUE IMPORTA EL INITIAL STATE
export const userSlice = createSlice({
  name: "stateName",
  initialState,

  //Los reductores lo que hacen es modificar los valores del estado
  reducers: {
    setName: (state, action) => {
      state.name = [action.payload];
    },

    clearName: (state) => {
      state.name = [];
    },
  },
});

export const { setName, clearName } = userSlice.actions;

export const stateName = (state) => state;

export default userSlice.reducer;
