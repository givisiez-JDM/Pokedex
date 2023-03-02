import styled from "styled-components";

export const PokedexContainer = styled.div`
  background-color: #ffffff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 72vh;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
export const PokedexHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const PokedexTitulo = styled.h1`
  color: #d11919;
`;
export const TextLoading = styled.div`
  color: #d11919;
  font-size: 2em;
`;
