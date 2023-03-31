import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [
    {
      tag: "casa",
      id: 0,
    },
    {
      tag: "trabajo",
      id: 1,
    },
  ],
  ultimoId: 2,
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
  },
});

export const { setTag } = tagSlice.actions;

export const stateName = (state) => state;

export default tagSlice.reducer;
