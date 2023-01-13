import React from "react";
import * as Styles from "./styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function QuestionsPage() {
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.Text>
          Si ya tienes un archivo con tus preguntas has click en el boton de
          cargar, si no tienes un archivo has click en el boton de crear
          preguntas.
        </Styles.Text>
        <Button variant="contained" onClick={() => navigate("/crear")}>
          Crear Preguntas
        </Button>
        <Button variant="contained">Cargar Preguntas</Button>
      </Styles.Card>
    </Styles.Container>
  );
}

export default QuestionsPage;
