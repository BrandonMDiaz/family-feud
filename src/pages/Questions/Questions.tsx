import React from "react";
import * as Styles from "./styles";
import * as GlobalStyles from "../../common/styles/global";
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
              Hay que crear las preguntas que se usaran en el juego.
            </Styles.Text>
            <Styles.Text>
              Haz click en crear preguntas para comenzar a crear tus preguntas.
            </Styles.Text>
            <Styles.Text>
              Si ya has jugado antes y tienes el archivo que se generó al
              comenzar a jugar, haz click en el boton de cargar preguntas.
            </Styles.Text>
            <Styles.Text>
              Si deseas jugar con preguntas generadas por el equipo de
              MasPopular, utiliza el ultimo botón.
            </Styles.Text>
          </Styles.Col1>
          <Styles.Col2>
            <GlobalStyles.CustomButton
              variant="contained"
              onClick={() => navigate("/crear")}
            >
              Crear Preguntas
            </GlobalStyles.CustomButton>
            <GlobalStyles.CustomButton variant="contained">
              Cargar Preguntas
            </GlobalStyles.CustomButton>
            <GlobalStyles.CustomButton variant="contained">
              Usar preguntas por default
            </GlobalStyles.CustomButton>
          </Styles.Col2>
        </Styles.CardBody>
      </GlobalStyles.Card>
    </Styles.Container>
  );
}

export default QuestionsPage;
