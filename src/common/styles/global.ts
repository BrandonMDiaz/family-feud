import styled from "styled-components";
import Button, { ButtonProps } from "@mui/material/Button";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardSubtitle = styled.h2`
  color: #e1a339;
`;

export const Card = styled.div`
  width: 70%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px white solid;
  border-radius: 10px;
  padding-bottom: 2%;
  box-shadow: 0px 4px 25px 2px rgba(227, 176, 81, 0.75);
  -webkit-box-shadow: 0px 4px 25px 2px rgba(227, 176, 81, 0.75);
  -moz-box-shadow: 0px 4px 25px 2px rgba(227, 176, 81, 0.75);
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3vw;
`;

export const CustomButton = styled(Button)<ButtonProps>`
  color: black !important;
  background-color: #e58e27 !important;
  &:hover: {
    background-color: #e3a65d !important;
  }
`;
