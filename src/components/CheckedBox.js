import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckedBox = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <label>Remember Me</label>
    </div>
  );
};

export default CheckedBox;
