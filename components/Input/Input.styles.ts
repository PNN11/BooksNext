import styled from "styled-components";
import { StyledInputType } from "./Input.types";

export const StyledInput = styled.div<StyledInputType>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.type === "search" && "35px"};
`;
