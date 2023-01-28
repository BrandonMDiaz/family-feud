import React, { useContext } from "react";

import CustomDialog from "../Dialog/Dialog";
import { GameContext } from "../../hooks/gameContext";

interface Props {
  onSuccess: () => void;
}
export default function SaveQuestionsDialog({ onSuccess }: Props) {
  const gameContext = useContext(GameContext);

  const downloadQuestions = () => {
    const fileName = "MasPopular.json";
    const blob = new Blob([JSON.stringify(gameContext.game.questions)], {
      type: "text/json",
    });

    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };
  const success = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    downloadQuestions();
    onSuccess();
  };
  return (
    <CustomDialog
      btnText="Comenzar a jugar"
      dialogTitle="¿Estas seguro que deseas comenzar?"
      dialogText="Si das click en 'Comenzar' empezará tu partida, las preguntas que creaste, con sus respectivas respuestas,
      se van a descargar en un archivo llamado 'MasPopular.json' asi si quieres reutilizar las mismas preguntas en un futuro
       solo deberas cargarlas en el menu anterior."
      cancelBtnText="Cancelar"
      successBtnText="Continuar"
      onSuccess={success}
    ></CustomDialog>
  );
}
