import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-items: center;
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors[0]}, ${theme.colors[1]})`};
  border-radius: 100%;
  box-shadow: ${({ theme, winner }) => winner ? `0 5px ${theme.colors[2]}, 0 0 0 4vw hsla(0, 0%, 100%, 4%), 0 0 0 9vw hsla(0, 0%, 100%, 3%),  0 0 0 17vw hsla(0, 0%, 100%, 1.5%)` : ` 0 5px ${theme.colors[2]}`};
  display: flex;
  height: 32vw;
  justify-content: center;
  width: 32vw;
  
  &:disabled{
    cursor: default;
  }

  @media only screen and (min-width: 1024px){
    height:  ${({ size }) => size === 'big' ? '16vw' : '12vw'};
    width: ${({ size }) => size === 'big' ? '16vw' : '12vw'};
  }

`

export const ButtonIconBackground = styled.div`
  align-items: center;
  background-color: hsl(0, 0%, 90%);
  border-radius: 100%;
  box-shadow: inset 0 5px hsl(231, 23%, 78%);
  display: flex;
  height: 24vw;
  justify-content: center;
  width: 24vw;

  &>img{
    width: 50%;
  }

  @media only screen and (min-width: 1024px){
    height:  75%;
    width:  75%;
  }
`