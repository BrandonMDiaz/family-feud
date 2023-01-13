import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import Score from "../Score/Score";
import { GameContext } from "../../hooks/gameContext";
import AnswerDisplay from "../Answer/AnswerDisplay";
import { Answer } from "../../models/Answers";

interface Props {
  answers: Answer[];
}
function AnswerBoard({ answers }: Props) {
  const gameContext = useContext(GameContext);
  const currentQuestion = gameContext.currentQuestion;
  const question = gameContext.questions[currentQuestion];
  const halfLength = Math.ceil(question.answers.length / 2);
  const col1 = answers.slice(0, halfLength);
  const col2 = answers.slice(halfLength, question.answers.length);

  return (
    <Styles.OuterBorder>
      <Styles.Board>
        <Styles.Col1>
          {col1.map((el) => (
            <AnswerDisplay
              answer={el.answer}
              points={el.points}
              display={false}
            ></AnswerDisplay>
          ))}
        </Styles.Col1>
        <Styles.Col2>
          {col2.map((el) => (
            <AnswerDisplay
              answer={el.answer}
              points={el.points}
              display={false}
            ></AnswerDisplay>
          ))}
        </Styles.Col2>
      </Styles.Board>
    </Styles.OuterBorder>
  );
}

export default AnswerBoard;
