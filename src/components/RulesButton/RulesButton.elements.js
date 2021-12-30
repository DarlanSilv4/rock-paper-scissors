import styled from 'styled-components';

export const RulesButtonContainer = styled.button`
  align-items:center;
  border-color: hsl(120, 100%, 100%);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 125px;

  &>span{
    color: hsl(120, 100%, 100%);
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 1024px){
    border-radius: 10px;
    font-size: 0.9rem;
    height: 40px;
    width: 130px;
    position: absolute;
    top: 88%;
    right: 3%;
  }
`;