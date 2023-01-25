import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px black solid;
  border-radius: 2%;
  padding-bottom: 2%;
  padding-top: 2%;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 4vw;
`;

export const CustomButton = styled(Button)<ButtonProps>`
  color: black !important;
  background-color: #e58e27 !important;
  &:hover: {
    background-color: #e3a65d !important;
  }
`;
