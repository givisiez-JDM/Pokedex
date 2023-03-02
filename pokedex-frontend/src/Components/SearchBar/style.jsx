import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  background-color: #d11919;
`;
export const SearchBarDiv = styled.div`
  background-color: #d11919;
  margin-right: 20px;
  padding: 20px;
`;
export const SearchBarInput = styled.input`
  padding: 0.7em;
  width: 30vw;
  box-shadow: 0px 2px 2px (0, 0, 0, 0.25);
  border: 0;
  border-bottom: 1px solid #fff;
  background: transparent;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
export const SearchBtnButton = styled.button`
  background-color: #d11919;
  border: solid 1px #fff;
  border-radius: 10px;
  height: 3em;
  width: 6em;
  color: #fff;
  padding: 10px 12px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: solid 1px #d11919;
    color: #d11919;
  }
`;
