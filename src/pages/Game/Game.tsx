import React, { useState, useContext } from "react";
import { Button, TextField, Input } from "@mui/material";
import { Answer } from "../../models/Answers";
import AnswerInput from "../../components/Answer/AnswerInput";
import { GameContext } from "../../hooks/gameContext";
import Question from "../../models/Questions";
function CreateQuestionAndAnswersPage() {
  const gameContext = useContext(GameContext);

  return <div></div>;
}

export default CreateQuestionAndAnswersPage;
