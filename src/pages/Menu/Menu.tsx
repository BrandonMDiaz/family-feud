import React from "react";
import * as GlobalStyles from "../../common/styles/global";
import * as Styles from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();
  return (
    <GlobalStyles.Container>
      <Styles.Title>Bienvenidos a 100 mexicanos dijeron</Styles.Title>
      <Button variant="contained" onClick={() => navigate("/preguntas")}>
        Empezar a jugar
      </Button>
    </GlobalStyles.Container>
  );
}

export default MenuPage;
