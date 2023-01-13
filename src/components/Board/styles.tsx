import styled from "styled-components";
export const OuterBorder = styled.div`
  max-width: 70%;
  max-height: 90%;
  height: 100%;
  width: 100%;
  border-radius: 60%;
  outline: 7px black solid;
  border: 20px #ffd4a2 solid;
`;
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 60%;
  align-items: center;
  outline: 7px black solid;
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #fcffa4 4px, rgba(0, 0, 0, 0) 1px),
    radial-gradient(circle, #000000 2px, rgba(0, 0, 0, 0) 1px);
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
