import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

export const userSlice = createSlice({
  name: "stateName",
  initialState,

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    clearName: (state) => {
      state.name = "";
    },
  },
});

export const { setName, clearName } = userSlice.actions;

export const stateName = (state) => state.userState.name;

export default userSlice.reducer;
