import React from "react";
import * as Styles from "./styles";
import * as GlobalStyles from "../../common/styles/global";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuestionsPage() {
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <GlobalStyles.Card>
        <GlobalStyles.CardTitle>
          <GlobalStyles.Title>MasPopular</GlobalStyles.Title>
        </GlobalStyles.CardTitle>
        <Styles.CardBody>
          <Styles.Col1>
            <Styles.Text>
              Hay que crear las preguntas que se usaran en el juego, has click
              en crear preguntas para comenzar a crear tus preguntas. Si ya
              tienes preguntas haz click en el boton de cargar preguntas.
            </Styles.Text>
          </Styles.Col1>
          <Styles.Col2>
            <Button variant="contained" onClick={() => navigate("/crear")}>
              Crear Preguntas
            </Button>
            <Button variant="contained">Cargar Preguntas</Button>
          </Styles.Col2>
        </Styles.CardBody>
      </GlobalStyles.Card>
    </Styles.Container>
  );
}

export default QuestionsPage;
