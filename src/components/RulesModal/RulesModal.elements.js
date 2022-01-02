import styled from "styled-components";

export const RulesModalBackground = styled.div`
  align-items: center;
  background-color: hsla(0, 0%, 0%, 40%);
  display: flex;
  position: fixed;
  height: 100%;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const RulesModalContainer = styled.div`
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  display: grid;
  gap: 5vw;
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  justify-items: center;
  padding: 0 10vw;
  position: fixed;
  width: 100%;

  @media only screen and (min-width:1024px){
    border-radius: 2%;
    gap: 1vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10% 90%;
    height: 60%;
    padding: 2vw 2vw;
    width: 27%;
  }
`

export const RulesModalTitle = styled.h1`
  color: hsl(229, 25%, 31%);
  font-size: 4.5vh;
  text-transform: uppercase;

  @media only screen and (min-width:1024px){
    justify-self: start;
  }
`

export const RulesImg = styled.img`
  width: 100%;

  @media only screen and (min-width:1024px){
    grid-area: 2 / 1 / last-col / last-line; 
    width: 80%;
  } 
 
`;

export const RulesModalExitButton = styled.button`
  align-items: center;
  display: flex; 
  justify-content:c enter;

  & > img{
    width: 5vw;
  }
   
  @media only screen and (min-width:1024px){
    justify-self: end;
    
    & > img{
      width: 1.5vw;
    }

  }
`;
