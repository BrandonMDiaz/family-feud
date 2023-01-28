import React from "react";
import * as Styles from "./styles";
import * as GlobalStyles from "../../common/styles/global";
import { useNavigate } from "react-router-dom";

function QuestionsPage() {
  const navigate = useNavigate();

  return (
    <GlobalStyles.Container>
      <GlobalStyles.Card>
        <GlobalStyles.CardTitle>
          <GlobalStyles.Title>Maspopular</GlobalStyles.Title>
        </GlobalStyles.CardTitle>
        <Styles.Text>
          Antes de comenzar tenemos que agregar las preguntas que se usaran en
          el juego
        </Styles.Text>
        <Styles.CardBody>
          <Styles.Col1>
            <Styles.Text>
              Si ya tienes un archivo con tus preguntas cargalo presionando en
              este boton
            </Styles.Text>
            <GlobalStyles.CustomButton variant="contained">
              Cargar preguntas
            </GlobalStyles.CustomButton>
          </Styles.Col1>
          <Styles.Col1>
            <Styles.Text>
              Si quieres crear nuevas preguntas presiona este boton
            </Styles.Text>
            <GlobalStyles.CustomButton
              variant="contained"
              onClick={() => navigate("/crear")}
            >
              Crear Preguntas
            </GlobalStyles.CustomButton>
          </Styles.Col1>
          <Styles.Col1>
            <Styles.Text>
              Si deseas jugar con preguntas generadas por el equipo de
              MasPopular, haz click en este botón.
            </Styles.Text>

            <GlobalStyles.CustomButton variant="contained">
              Usar preguntas por default
            </GlobalStyles.CustomButton>
          </Styles.Col1>
        </Styles.CardBody>
      </GlobalStyles.Card>
    </GlobalStyles.Container>
  );
}

export default QuestionsPage;
