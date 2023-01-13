import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import { Button, TextField } from "@mui/material";
import { Answer } from "../../models/Answers";
import { answersArray } from "./ArrayOfEmptyAnswers";
import AnswerInput from "../../components/Answer/AnswerInput";
import { GameContext } from "../../hooks/gameContext";
import Question from "../../models/Questions";
import * as GlobalStyles from "../../common/styles/global";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function CreateQuestionAndAnswersPage() {
  const gameContext = useContext(GameContext);
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<Answer[]>(answersArray);
  const [question, setQuestion] = useState<string>("");
  const [reload, setReload] = useState(0);

  const deleteAnswer = (id: string) => {
    const answersArray = answers.filter((el) => {
      return el.id !== id;
    });
    setAnswers(answersArray);
  };

  const onAnswerChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    id: string
  ) => {
    const key = e.target.id;
    const data = e.target.value;
    let newAnswer: Answer[];
    if (key === "answer") {
      newAnswer = answers.map((el) =>
        el.id === id ? { ...el, answer: data } : el
      );
    } else {
      newAnswer = answers.map((el) =>
        el.id === id ? { ...el, points: Number(data) } : el
      );
    }
    setAnswers([...newAnswer]);
  };
  const addAnswer = () => {
    setAnswers([...answers, { id: uuidv4(), answer: "", points: 0 }]);
  };

  const saveQuestion = () => {
    const questionsWithAnswers: Question = {
      id: uuidv4(),
      question,
      answers,
    };
    gameContext.addQuestions(questionsWithAnswers);
    console.log(gameContext);
  };
  const startGame = () => {
    saveQuestion();
    navigate("/jugar");
  };
  const addAnotherQuestions = () => {
    saveQuestion();
    setReload(reload + 1);
  };
  return (
    <GlobalStyles.Container key={reload}>
      <Styles.Title>Creando pregunta</Styles.Title>
      <TextField onChange={(e) => setQuestion(e.target.value)}></TextField>
      <table>
        <thead>
          <tr>
            <th>Respuestas</th>
            <th>Puntos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {answers.map((data) => (
            <AnswerInput
              key={data.id}
              id={data.id}
              answer={data.answer}
              points={data.points}
              onInputChange={onAnswerChange}
              onDelete={deleteAnswer}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Button onClick={addAnswer}>Agregar otra respuesta</Button>
            </td>
          </tr>
        </tfoot>
      </table>
      <Button variant="contained" onClick={startGame}>
        Comenzar a jugar
      </Button>
      <Button variant="contained" onClick={addAnotherQuestions}>
        Agregar otra pregunta
      </Button>
    </GlobalStyles.Container>
  );
}

export default CreateQuestionAndAnswersPage;
