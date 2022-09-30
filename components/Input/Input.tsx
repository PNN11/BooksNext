import React from "react";
import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  name,
  checked,
}) => {
  return (
    <StyledInput type={type}>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        checked={checked}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  );
};

export default Input;
