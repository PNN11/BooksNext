import { ChangeEvent } from "react";

export interface InputProps {
  id: string;
  type: string;
  label: string;
  value?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface StyledInputType {
  type: string;
}
