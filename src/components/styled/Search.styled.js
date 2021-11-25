import styled from "styled-components";

export const SearchStyled = styled.input`
  padding: 3px 10px;
  width: 15vw;
  height: 30px;
  border-radius: 0;
  border: 0;
  border-bottom: 2px black solid;
  transition: .2s;

  &:focus {
    outline: none !important;
    border-bottom: 2px #719ECE solid;
    transition: 1s;
  }
`