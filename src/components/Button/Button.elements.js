import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors[0]}, ${theme.colors[1]})`};
  border-radius: 100%;
  box-shadow: ${({ theme }) => `0 5px ${theme.colors[2]}`};
  display: flex;
  height: 120px;
  justify-content: center;
  width: 120px;

  @media only screen and (min-width: 1024px){
    height: 160px;
    width: 160px;
  }

`

export const ButtonIconBackground = styled.div`
  align-items: center;
  background-color: hsl(0, 0%, 90%);
  border-radius: 100%;
  box-shadow: inset 0 5px hsl(231, 23%, 78%);
  display: flex;
  height: 90px;
  justify-content: center;
  width: 90px;

  &>img{
    width: 50%;
  }

  @media only screen and (min-width: 1024px){
    height: 120px;
    width: 120px;
  }
`