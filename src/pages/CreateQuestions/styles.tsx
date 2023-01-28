import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2%;
`;

export const Title = styled.h2`
  color: #e1a339;
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
  margin-top: 30px;
  width: 100%;
  & > tbody > tr > td.points {
    padding-left: 33px;
    padding-right: 33px;
  }
`;
export const InputContainer = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 20px;
  overflow-y: auto;
  margin-bottom: 3%;
`;
