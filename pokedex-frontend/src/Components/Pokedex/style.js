import styled from "styled-components"

export const PokedexHeader = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding: 10px;
`
export const PokedexGrid = styled.div`
display: grid;
gap: 10px;
grid-template-columns: repeat(3,1fr);

`
