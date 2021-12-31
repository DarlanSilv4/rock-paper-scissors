import styled from "styled-components";

export const ButtonsGridContainer = styled.div`
  align-items: center;
  background: url("/images/bg-triangle.svg");
  background-position:center 13.3vw;
  background-repeat: no-repeat;
  background-size: 70%;
  column-gap: 15vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  justify-items: center;
  margin-bottom: 15vh;
  row-gap: 5.5vw;
  width: 100%;

  & :nth-child(3){
    grid-column: 1 / 3;
  }

  @media only screen and (min-width: 1024px){
    background-position:center 5vw;
    background-size: 75%;
    column-gap: 6vw;
    height: 21vw;
    margin-bottom: 0;
    row-gap: 2vw;
    width: 29vw;
  }
`