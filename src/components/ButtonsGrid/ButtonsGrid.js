import React from "react";
import { ButtonsGridContainer } from "./ButtonsGrid.elements";

export default function ButtonsGrid({ children }) {
  return (
    <React.Fragment>
      <ButtonsGridContainer>
        {children}
      </ButtonsGridContainer>
    </React.Fragment>
  );
}