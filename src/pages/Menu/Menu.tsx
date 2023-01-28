import React from "react";
import * as Styles from "./styles";
import * as GlobalStyles from "../../common/styles/global";

import { useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();
  return (
    <Styles.Container>
      <Styles.Col1>
        <Styles.TextContainer>
          <Styles.Title>¡Juega Maspopular en donde quieras!</Styles.Title>
          <Styles.Text>
            Tambien conocido como 100 Mexicanos dijeron, Family feud o 100
            Latinos dijeron.
          </Styles.Text>
          <GlobalStyles.CustomButton onClick={() => navigate("/equipos")}>
            Empezar a jugar
          </GlobalStyles.CustomButton>
        </Styles.TextContainer>
      </Styles.Col1>
      <Styles.Col2></Styles.Col2>
    </Styles.Container>
  );
}

export default MenuPage;
