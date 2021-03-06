import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  border-color: hsl(217, 16%, 45%);
  border-radius: 2vw;
  border-style: solid;
  border-width: 0.8vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12vh;
  padding: 2.6vw;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    border-radius: 1vw;
    border-width: 0.2vw;
    height: 23vh;
    margin-top: 1.2vw;
    margin-bottom: 0;
    padding: 5% 2%;
    width: 100vh;
  }
`

export const Logo = styled.img`
  margin-left: 1.5vw;
  width: 25%;

  @media only screen and (min-width: 1024px) {
    max-width: none;
  }
`