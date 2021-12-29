import styled from 'styled-components';

export const ScoreboardContainer = styled.div`
  align-items: center;
  background-color: hsl(120, 100%, 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0px;
  height: 100%;
  width: 30%;

  @media only screen and (min-width: 1024px){
    border-radius: 10px;
    width: 135px;
    height: 105px;
  }

`;

export const ScoreText = styled.span`
  color: hsl(229, 64%, 46%);
  font-size: small;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media only screen and (min-width: 1024px){
    font-size: medium;
  }

`
export const Score = styled.span`
  color: hsl(229, 25%, 31%);
  font-size: 2.8rem;
  font-weight: bold;
  letter-spacing: 0px;
  line-height: 1;

  @media only screen and (min-width: 1024px){
    font-size: 4rem;
  }
`