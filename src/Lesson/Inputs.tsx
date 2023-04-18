import { useState } from "react";

export const Inputs = () => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
