import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [
    {
      tag: "Casa",
      id: 0,
    },
    {
      tag: "Trabajo",
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
    setTagClear: (state, action) => {
      const newArray = state.tags.filter((tag) => {
        return action.payload !== tag.id;
      });
      state.tags = newArray;
    },
  },
});

export const { setTag, setTagClear } = tagSlice.actions;

export const stateTag = (state) => state.tagState;

export default tagSlice.reducer;
