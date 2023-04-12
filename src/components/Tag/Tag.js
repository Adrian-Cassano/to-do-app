import * as React from "react";
import { useSelector } from "react-redux";

import { stateTag } from "../../redux/slices/tagSlice";

import FormControl from "@mui/material/FormControl";

export default function Tag({ value, setValue }) {
  const tagSlice = useSelector(stateTag);

  return (
    <FormControl fullWidth>
      <select
        selected={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        defaultValue="casa"
      >
        {tagSlice?.tags?.map((tag, index) => {
          return (
            <option key={tag.id + index} value={tag.tag}>
              {tag.tag}
            </option>
          );
        })}
      </select>
    </FormControl>
  );
}
