import styled from "styled-components";

export const ButtonsGridContainer = styled.div`
  align-items: center;
  background: url("/images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position:center 70px;
  background-size: 70%;
  display: grid;
  column-gap: 80px;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  width: 100%;

  & :nth-child(3){
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 1024px){
    width: 400px;
    height: 280px;
  }
`