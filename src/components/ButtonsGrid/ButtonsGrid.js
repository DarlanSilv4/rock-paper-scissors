import React from "react";
import { Button } from "../../components";
import { ButtonsGridContainer } from "./ButtonsGrid.elements";

export default function ButtonsGrid() {
  return (
    <ButtonsGridContainer>
      <Button type="paper" />
      <Button type="scissors" />
      <Button type="rock" />
    </ButtonsGridContainer>
  );
}