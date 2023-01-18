import styled from "styled-components";
export const OuterBorder = styled.div`
  height: 49%;
  width: 73%;
  outline: 7px black solid;
  border: 20px #ffd4a2 solid;
  border-radius: 1%;
`;
export const Board = styled.div`
  display: grid;
  grid-template-columns: [first] 50% [second] 50%;
  height: 100%;
  width: 100%;
  outline: 10px black solid;
  border-radius: 1%;
  background-color: rgb(184, 215, 252);
`;

export const AnsweContiner = styled.div`
  height: 100%;
  width: 100%;
`;

export const Col1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Col2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
