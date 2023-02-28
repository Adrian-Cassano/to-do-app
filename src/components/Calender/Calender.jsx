import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";


export default function MaterialUIPickers({ value, setValue }) {
 
  

  return (
   
    <DatePicker 
    
    selected={value}
    onChange={(date) => {
        setValue(date);
        
    }}
    showYearDropdown
    shouldCloseOnSelect={true}

    />
  );
}
