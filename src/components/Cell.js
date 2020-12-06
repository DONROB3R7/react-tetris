import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tertrominos";

const Cell = ({ type }) => {
  return <StyledCell type={'L'} color={TETROMINOS['L'].color}></StyledCell>;
};

export default Cell;
