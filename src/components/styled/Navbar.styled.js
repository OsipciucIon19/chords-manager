import styled from "styled-components";

export const NavbarStyled = styled.nav`
  padding: 10px 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;

  .navbarLinks {
    display: flex;
  }

  .navbarBrand {
    max-height: 100%;
    font-size: 24pt;
    font-weight: bold;
    color: aliceblue;
  }

  .link {
    margin: 1rem;
    color: white;
  }
`