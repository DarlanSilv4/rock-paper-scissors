import React from "react";
import { ButtonsGridContainer } from "./ButtonsGrid.elements";

export default function ButtonsGrid({ children }) {
  return (
    <ButtonsGridContainer>
      {children}
    </ButtonsGridContainer>
  );
}