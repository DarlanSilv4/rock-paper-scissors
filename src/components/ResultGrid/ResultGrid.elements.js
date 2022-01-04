import styled from "styled-components";

export const ResultGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  text-transform: uppercase;
  margin-bottom: 5vh;
  row-gap: 4vw;
  width: 100%;

  @media only screen and (min-width: 1024px){
    align-items:center;
    display: flex;
    flex-direction: row-reverse;
    gap: 4vw;
    justify-content:center;
    margin-top:3vw;

    & :nth-child(1) { 
      order: 2; 
    }
  }

`;

export const PickedContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 5vw;
  justify-content: center;
  letter-spacing: 0.2vw;
  font-size: 4vw;

  @media only screen and (min-width: 1024px){
    gap: 2vw;
    font-size: 1.5vw;
  }
`;

export const ResultContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  grid-column: 1 / 3;
  justify-content: end;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1024px){
    flex-direction: column-reverse;
    gap: 1vw;
    width: 20%;
  }
`;

export const ResultText = styled.span`
  font-size: 12vw;
  font-weight: 700;

  @media only screen and (min-width: 1024px){
    font-size: 4vw;
  }
`;

export const PlayAgainButton = styled.button`
  background-color: hsl(120, 100%, 100%);
  border-radius: 2vw;
  color: hsl(229, 25%, 31%);
  letter-spacing: 0.3vw;
  height: 7vh;
  width: 60%;
  font-size: 4vw;
  font-weight: 500;
  text-transform: uppercase;

  &:hover{
    color: hsl(349, 71%, 52%);
  }

  @media only screen and (min-width: 1024px){
    border-radius: 0.5vw;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 1vw;
    width: 80%;
  }
`;