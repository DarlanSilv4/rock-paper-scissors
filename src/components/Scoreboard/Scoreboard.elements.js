import styled from 'styled-components';

export const ScoreboardContainer = styled.div`
  align-items: center;
  background-color: hsl(120, 100%, 100%);
  border-radius: 1.3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.6vw 0;
  height: 100%;
  width: 25%;

  @media only screen and (min-width: 1024px){
    border-radius: 0.7vw;
    width: 10vw;
    height: 7.5vw;
  }

`;

export const ScoreText = styled.span`
  color: hsl(229, 64%, 46%);
  font-size: 2.2vw;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media only screen and (min-width: 1024px){
    font-size: 1.2vw;
  }

`
export const Score = styled.span`
  color: hsl(229, 25%, 31%);
  font-size: 10vw;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 1;

  @media only screen and (min-width: 1024px){
    font-size: 4.5vw;
  }
`