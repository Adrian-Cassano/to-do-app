import * as React from "react";
import { useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Tag({ value, setValue }) {
  const tagSlice = useSelector((store) => store.tagSlice);

  return (
    <Box sx={{ minWidth: 120 }}>
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
    </Box>
  );
}
