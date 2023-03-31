import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
