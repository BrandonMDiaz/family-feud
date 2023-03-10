import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBody = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  color: white;
  align-items: center;
  gap: 5%;
`;
export const Text = styled.h3`
  color: #000000;
  padding: 0 !important;
  margin-bottom: 5px !important;
`;
export const Col1 = styled.div`
  padding: 2%;
  border-radius: 5px;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 4px 23px 10px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 4px 23px 10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 23px 10px rgba(0, 0, 0, 0.75);
  }
`;
