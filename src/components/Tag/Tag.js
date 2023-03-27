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
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          selected={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label="Tag"
        >
          {tagSlice?.tags?.map((tag, index) => {
            return (
              <MenuItem key={tag.id + index} value={tag.tag}>
                {tag.tag}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
