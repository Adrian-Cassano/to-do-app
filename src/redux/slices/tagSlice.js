import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  ultimoId: 0,
};

export const tagSlice = createSlice({
  name: "stateName",
  initialState,

  reducers: {
    setTag: (state, action) => {
      const { tag } = action.payload;
      state.tags = [
        ...state.tags,
        {
          tag: tag,
          id: state.ultimoId,
        },
      ];
      state.ultimoId++;
    },
    setShowTag: (state, action) => { 
      console.log(action.payload)
      const newArray = state.tags.filter((tag) => {
        return action.payload === tag.id;
      });
      state.tags = newArray;
    },
  },
});

export const { setTag , setShowTag } = tagSlice.actions;

export const stateName = (state) => state;

export default tagSlice.reducer;
