import React from "react";
import * as Styles from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";

function MenuPage() {
  const navigate = useNavigate();
  return (
    <Styles.Container>
      <Styles.Col1>
        {/* <img src="../../assets/images/logo.png" alt="react logo" /> */}
        <Styles.TextContainer>
          <Styles.Title>¡ Juega MasPopular en donde quieras !</Styles.Title>
          <Styles.Text>
            Tambien conocido como 100 Mexicanos dijeron, Family feud o 100
            Latinos dijeron.
          </Styles.Text>
          <Button variant="contained" onClick={() => navigate("/preguntas")}>
            Empezar a jugar
          </Button>
        </Styles.TextContainer>
      </Styles.Col1>
      <Styles.Col2></Styles.Col2>
    </Styles.Container>
  );
}

export default MenuPage;
