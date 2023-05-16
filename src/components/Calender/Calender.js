
import * as React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function MaterialUIPickers({ value, setValue, firstDate }) {
  return (
    <DatePicker
      
      selected={value}
      onChange={(date) => {
        setValue(date);
      }}
      
      minDate={firstDate || new Date()}
      showYearDropdown
      shouldCloseOnSelect={true}
    />
  );
}
