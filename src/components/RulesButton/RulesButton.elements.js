import styled from 'styled-components';

export const RulesButtonContainer = styled.button`
  align-items:center;
  border-color: hsl(120, 100%, 100%);
  border-radius: 2vw;
  border-style: solid;
  border-width: 0.25vw;
  display: flex;
  justify-content: center;
  padding: 2.6vw 0;
  width: 34vw;

  @media only screen and (min-width: 1024px){
    border-radius: 0.5vw;
    border-width: 0.1vw;
    height: 2.9vw;
    padding: 0.7vw 0;
    position: absolute;
    right: 3%;
    top: 88%;
    width: 9.5vw;
  }

  &>span{
    color: hsl(120, 100%, 100%);
    font-size: 3.5vw;
    font-weight: 500;
    letter-spacing: 0.2vw;
    text-transform: uppercase;

    @media only screen and (min-width: 1024px){
      font-size: 1vw;
    }
  }
`;