import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  border-color: hsl(217, 16%, 45%);
  border-radius: 8px;
  border-style: solid;
  border-width: medium;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    border-radius: 15px;
    height: 135px;
    margin-top: 15px;
    padding: 15px 20px;
    width: 50%;
  }
`

export const Logo = styled.img`
  margin-left: 12px;
  width: 22%;

  max-width: 153px;
`