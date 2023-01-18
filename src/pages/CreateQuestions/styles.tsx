import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.h4``;
export const Table2 = styled.div`
  display: flex;
  width: 100%;
`;
export const Col = styled.div<{ grow: number }>`
  display: flex;
  flex-grow: ${(props) => props.grow || 1};
  flex-direction: column;
`;
export const Table = styled.table`
  width: 100%;
`;
export const InputContainer = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 20px;
  background-color: #31c7c4;
  overflow-y: auto;
  margin-bottom: 3%;
`;
