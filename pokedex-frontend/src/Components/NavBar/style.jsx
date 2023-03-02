import styled from "styled-components";

export const Nav = styled.div`
  height: 4em;
  display: flex;
  flex-direction: space-evenly;
  justify-content: center;
  align-items: center;
  background-color: #d11919;
  border: none;
  @media screen and (min-width: 300px) {
    margin-bottom: 10px;
    background-color: #d11919;
  }
`;
export const NavBarImg = styled.img`
  width: 10rem;
  margin-right: 50px;
  margin-top: 1.5em;
`;

export const DivFavoritos = styled.div`
  color: white;
  margin-top: 1.5em;
  background-color: #d11919;
  font-size: 1.2rem;
  font-weight: 600;
`;
