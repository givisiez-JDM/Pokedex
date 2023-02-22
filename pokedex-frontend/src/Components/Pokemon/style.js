import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin: 10px 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: 1px solid lightgrey;
  width: 300px; 

`;

export const ImgPokemonContainer = styled.div`
  padding: 0px 5px;
`;

export const PokemonImg = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 10px;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  margin: 10px 10px;
  flex: 1;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-transform: capitalize;
   
  }

  div{
    margin-right:5px;
    margin-bottom:5px;
  }

`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TypePokemon = styled.div`
  display: flex;
  text-transform: capitalize;
`;

export const TypeText = styled.div`
  margin-right: 10px;
`;


export const PokemonButtonHeart = styled.button``;
